import { getCourseData } from "./getData";
import { results, validate } from "./Result";
import { Semester } from "./Semester";

export default class Schedule {
    constructor(scheduleJson) {
        this.semesters = {};
        this.years = [];

        if (scheduleJson) {
            for (const [key, value] of Object.entries(scheduleJson.semesters))
                this.semesters[key] = new Semester(key, value);

            if (scheduleJson.years && Array.isArray(scheduleJson.years))
                this.years = scheduleJson.years;
        }
    }

    addSemester(semesterId) {
        const sem = new Semester(semesterId);

        this.semesters[semesterId] = sem;

        this.addSemesterToYears(semesterId);

        return results.SUCCESS;
    }

    /**
     * Add semester to year list.
     * @param {*} semesterId must be (fall|spring)(2num year)
     * @returns
     */
    addSemesterToYears(semesterId) {
        // brittle asf

        const { yearId } = Semester.getIdParts(semesterId);
        const yearObj = this.years.find((year) => year.id === yearId);

        // create or add year
        if (yearObj) {
            yearObj.semesters.push(semesterId);

            yearObj.semesters.sort((semOne, semTwo) => {
                const soSeason = Semester.getIdParts(semOne).season,
                    stSeason = Semester.getIdParts(semTwo).season;

                if (soSeason === "fall" && stSeason === "spring") return true;
                return false;
            });
        } else {
            this.years.push({
                id: yearId,
                semesters: [semesterId],
            });

            this.years.sort(
                (y1, y2) => parseInt(y1.slice(2)) < parseInt(y2.slice(2)),
            );
        }

        // sort
        this.years.sort(
            (yearOne, yearTwo) =>
                parseInt(yearOne.yar) < parseInt(yearTwo.yaer),
        );
    }

    addCourse(courseId, semesterId) {
        // Add course

        if (!this.semesters[semesterId]) {
            if (!this.addSemester(semesterId)) return results.FAIL_ADD_SEMESTER;
        }

        if (!this.verifyPrereqs(courseId, semesterId))
            return results.FAIL_VALIDATE_PREREQS;

        return this.semesters[semesterId].addCourseById(courseId);
    }

    getIterableSemList() {
        return this.years.reduce((acc, year) => {
            year.semesters.forEach((sem) => {
                acc.push(sem);
            });

            return acc;
        }, []);
    }

    verifyPrereqs(courseId, semesterId) {
        // moving backwards, check sems for prereqs
        const semList = this.getIterableSemList();

        let prereqGroups = getCourseData(courseId).prereqs;
        if (prereqGroups.length === 0) return true;

        let i = semList.indexOf(semesterId) - 1;

        // loop thru semesters
        for (i; i >= 0; i--) {
            let currentSem = this.getSemester(semList[i]);

            // loop thru groups, deleting found prereqs
            for (let j = 0; j < prereqGroups.length; j++) {
                const currGroup = prereqGroups[i];

                // once a prereq group is empty (all found), prereqs are fulfilled

                if (currGroup.length === 0) return true;

                currGroup.forEach((prereq, k) => {
                    console.log(
                        "group " +
                            JSON.stringify(prereq) +
                            +currentSem.hasCourse(prereq.id) +
                            "jahsjklhdf",
                    );

                    if (currentSem.hasCourse(prereq.id)) {
                        console.log("F");
                        currGroup.splice(k, 1);
                        if (currGroup.length === 0) return true;
                    }
                });
            }
        }

        return false;
    }

    getSemester(semesterId) {
        const sem = this.semesters[semesterId];

        if (sem) return sem;
        else return false;
    }

    updateReqs(semesterId) {
        //
    }
}

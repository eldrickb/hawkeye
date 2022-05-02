import CourseList from "./CourseList";
import RequirementList from "./RequirementList";
import { results, validate } from "./Result";

export class Semester {
    constructor(id, semesterJson) {
        this.id = id;
        this.courses = new CourseList();
        this.reqs = new RequirementList();

        if (semesterJson) {
            this.id = semesterJson.id;

            this.courses = new CourseList(semesterJson.courses);
            this.reqs = new RequirementList(semesterJson.reqs);
        }
    }

    addCourseById(courseId) {
        // check prereqs
        const course = this.courses.addById(courseId);

        // update prereqs
        if (course !== results.FAIL_ADD_COURSE) {
            return this.reqs.updateReqByCourse(course);
        }

        return results.FAIL_ADD_COURSE;
    }
    removeCourse(courseId) {
        return this.courses.remove(courseId);
    }
    hasCourse(courseId) {
        return this.courses.has(courseId);
    }
    getCourse(courseId) {
        return this.courses.get(courseId);
    }

    getCourses() {
        return this.courses;
    }

    getReqs() {
        return this.reqs;
    }

    updateReqsWithPrevious(prevReqs) {
        if (prevReqs) this.reqs = new RequirementList(prevReqs);
        for (let value of Object.values(this.courses.courses)) {
            this.reqs.updateReqByCourse(value);
        }
    }

    static getIdParts(semesterId) {
        const yearNum = parseInt(semesterId.slice(-2)),
            season = semesterId.slice(0, -2).toLowerCase();

        if (yearNum < 18 && yearNum > 99)
            return results.FAIL_INVALID_SEMESTER_ID;

        if (season != "fall" && season != "spring")
            return results.FAIL_INVALID_SEMESTER_ID;

        let yearId;
        if (season === "fall") yearId = `${yearNum}-${yearNum + 1}`;
        if (season === "spring") yearId = `${yearNum - 1}-${yearNum}`;

        return {
            season: season,
            yearId: yearId,
        };
    }
}

export class ScheduleBuilder {
    constructor() {}

    setYear(year) {}
}

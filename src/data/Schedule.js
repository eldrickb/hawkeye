import { Semester } from "./Semester";

export default class Schedule {
    constructor(scheduleJson) {
        this.semesters = {};
        this.years = {};

        if (scheduleJson) {
            for (const [key, value] of Object.entries(scheduleJson.semesters))
                this.semesters[key] = new Semester(value);
        }
    }

    addSemester(semesterId) {
        this.semesters[semesterId] = new Semester(semesterId);

        return true;
    }

    addCourse(courseId, semesterId) {
        // Add course

        if (!this.semesters[semesterId]) {
            if (!this.addSemester(semesterId)) return false;
        }

        return this.semesters[semesterId].addCourseById(courseId);
    }

    //
    verifyPrereqes(courseId, semesterId) {
        //
    }

    updateReqs(semesterId) {
        //
    }
}

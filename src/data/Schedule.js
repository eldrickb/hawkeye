import Semester from "./Semester";

export default class Schedule {
    constructor(scheduleJson) {
        this.semesters = new Array();

        if (!scheduleJson) {
            this.addSemester("fall21");
            this.addSemester("spring22");
        } else {
            scheduleJson.semesters.forEach((sem) => {});
        }
    }

    addSemester(semesterId) {
        this.semesters[semesterId] = new Semester(semesterId);
    }

    addCourse(courseId, semesterId) {
        // Add course
        this.semesters[semesterId].addCourse(courseId);

        this.updateReqs(courseId, semesterId);
    }

    //
    verifyPrereqes(courseId, semesterId) {
        //
    }

    updateReqs(semesterId) {
        //
    }
}

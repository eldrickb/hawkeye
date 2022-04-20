import Semester from "./Semester";

export default class Schedule {
    constructor() {
        this.semesters = new Array();

        this.semesters.push(new Semester("fall 1"));
        this.semesters.push(new Semester("spring 1"));
    }

    //
    verifyPrereqes(id) {
        //
    }

    updateReqs(id) {
        //
    }
}

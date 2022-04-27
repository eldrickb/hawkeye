// <reference types="cypress" />

import { Semester } from "../../shared/Semester";
import Schedule from "../../shared/Semester";
import RequirementList from "../../shared/RequirementList";
import Requirement from "../../shared/Requirement";
import CourseList from "../../shared/CourseList";

describe("test data", () => {
    beforeEach(() => {});

    it("should create a Semester", () => {
        const sem = new Semester("fall 1");

        sem.addCourse("cs121");

        // console.log(sem.getCourses());
    });

    it("should create  a req list ", () => {
        const req = new RequirementList();

        console.log(req.getStatus());
    });

    it("should create a sem and fail to add 132", () => {
        const sem = new Semester("fall 21");
        console.log(JSON.stringify(sem));
        expect(sem.addCourse("math132")).to.be.true;
    });

    it("should create a sem and succeed to add 121", () => {
        const sem = new Semester("fall 21");
        console.log(JSON.stringify(sem));
        expect(sem.addCourse("cs121")).to.be.true;
    });
});

import CourseList from "./CourseList";
import RequirementList from "./RequirementList";
import { results } from "./Result";

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
        const course = this.courses.addCourseById(courseId);

        // update prereqs
        if (course) {
            return this.reqs.updateReqByCourse(course);
        }

        return results.FAIL_ADD_COURSE;
    }
    removeCourse(courseId) {
        return this.courses.remove(courseId);
    }
    hasCourse(courseId) {
        return this.courses.has(id);
    }
    getCourse(courseId) {
        return this.courses.get(id);
    }

    getCourses() {
        return this.courses;
    }

    getReqs() {
        return this.reqs;
    }
}

export class ScheduleBuilder {
    constructor() {}

    setYear(year) {}
}

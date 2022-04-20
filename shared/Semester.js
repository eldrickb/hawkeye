import CourseList from "./CourseList";
import RequirementList from "./RequirementList";

export default class Semester {
    constructor(name) {
        this.name = name;
        this.courses = new CourseList();
        this.reqs = new RequirementList();
    }

    addCourse(courseId) {
        // check prereqs
        const course = this.courses.add(courseId);

        if (course) {
            // update prereqs
            this.reqs.updateReq(course.majorReqs[0], course.id);
            return true;
        }

        return false;
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

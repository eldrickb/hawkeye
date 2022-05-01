import { getCourseData } from "./getData";
import { results } from "./Result";

export default class CourseList {
    constructor(courseJson) {
        this.courses = {};

        if (courseJson) {
            for (const [key, value] of Object.entries(courseJson))
                this.courses[key] = value;
        }
    }

    addCourseObject(course) {
        if (course.id) {
            this.courses[course.id] = course;
            return results.SUCCESS;
        }

        return results.FAIL_ADD_COURSE;
    }

    addById(courseId) {
        courseId = courseId.toUpperCase();

        if (courseId) {
            const match = getCourseData(courseId);

            if (match) {
                this.courses[courseId] = match;
                return match;
            }
        }

        return results.FAIL_ADD_COURSE;
    }

    removeCourseById(courseId) {
        if (this.courses[courseId]) {
            this.courses[courseId] = null;
            return results.SUCCESS;
        }
        return results.FAIL_REMOVE_COURSE;
    }

    has(id) {
        console.log(
            "checking " +
                id +
                " in " +
                JSON.stringify(this.courses) +
                " result " +
                (this.courses[id] ? true : false),
        );
        if (this.courses[id]) return true;
        return false;
    }

    get(id) {
        id = id.toUpperCase();
        if (this.courses[id]) {
            return this.courses[id];
        }
        return results.FAIL;
    }

    toJSON() {
        return this.courses;
    }
}

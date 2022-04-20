import courses from "../public/courses.json";

export default class CourseList {
    constructor() {
        this.courses = [];
    }

    addCourseObject(course) {
        if (course.id) {
            this.courses[course.id] = course;
            return true;
        }

        return false;
    }

    add(courseId) {
        if (courseId) {
            const matchingCourses = courses.filter(
                (course) => course.id === courseId,
            );

            if (matchingCourses.length === 1) {
                const match = matchingCourses[0];
                this.courses[courseId] = match;
                return match;
            }
        }
        return false;
    }

    remove(id) {
        if (this.courses[id]) {
            this.courses[id] = null;
            return true;
        }
        return false;
    }

    has(id) {
        if (this.courses[id]) return true;
        return false;
    }

    get(id) {
        if (this.courses[id]) {
            return this.courses[id];
        }
        return false;
    }

    static getCourseData(courseId) {
        const results = courses.filter((course) => course.id === courseId);

        if (results.length === 1) return results[0];
        else if (results.length > 1) return results;
        else return false;
    }
}

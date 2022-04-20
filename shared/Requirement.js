import CourseList from "./CourseList";

export default class Requirement {
    constructor(reqJson) {
        if (reqJson) {
            this.id = reqJson.id;
            this.target = reqJson.target;
            this.progress = 0;
        }
    }

    add(courseId) {
        const courseData = CourseList.getCourseData(courseId);

        if (courseData && courseData.majorReqs.includes(this.id)) {
            this.progress++;
            return true;
        }

        return false;
    }

    remove(courseId) {
        const courseData = CourseList.getCourseData(courseId);

        if (courseData && courseData.majorReqs.includes(this.id)) {
            this.progress--;
            return true;
        }

        return false;
    }

    getStatus() {
        return {
            id: this.id,
            progress: this.progress,
            target: this.target,
        };
    }
}

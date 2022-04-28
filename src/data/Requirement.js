import { getCourseData } from "./getData";
import { results } from "./Result";

export default class Requirement {
    constructor(reqJson) {
        if (reqJson) {
            this.id = reqJson.id;
            this.target = reqJson.target;
            this.progress = 0;
        }
    }

    update(course, isAdding = true) {
        if (course && course.majorReqs.includes(this.id)) {
            if (isAdding) this.progress++;
            else if (!isAdding) this.progress--;

            if (this.progress > this.target || this.progress < 0) return false;

            return results.SUCCESS;
        }

        return results.FAIL_UPDATE_REQS;
    }

    clone() {
        return new Requirement(this.getStatus());
    }
}

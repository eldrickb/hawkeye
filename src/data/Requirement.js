import { getCourseData } from "./getData";
import { results } from "./Result";

const ReqStatus = {
    NOT_STARTED: "NOT_STARTED",
    NO_CHANGE: "NO_CHANGE",
    STARTED: "STARTED",
    PROGRESS: "PROGRESS",
    COMPLETE: "COMPLETE",
};
export default class Requirement {
    constructor(reqJson) {
        this.progress = 0;
        this.status = ReqStatus.NOT_STARTED;

        if (reqJson) {
            this.id = reqJson.id;
            this.target = reqJson.target;
            if (reqJson.progress) this.progress = reqJson.progress;

            if (reqJson.status) this.status = reqJson.status;
        }
    }

    update(course, isAdding = true) {
        const prev = this.progress;

        if (course && course.majorReqs.includes(this.id)) {
            if (isAdding) this.progress++;
            else if (!isAdding) this.progress--;

            if (this.progress > this.target || this.progress < 0)
                return results.FAIL_UPDATE_REQS;

            this.updateStatus(prev);

            return results.SUCCESS;
        }

        return results.FAIL_UPDATE_REQS;
    }

    updateStatus(prev) {
        if (prev > this.progress) return false;
        else if (this.progress === 0) {
            this.status = ReqStatus.NOT_STARTED;
        } else if (this.progress === this.target) {
            this.status = ReqStatus.COMPLETE;
        } else if (prev === 0 && this.progress > prev) {
            this.status = ReqStatus.STARTED;
        } else if (prev === this.progress) {
            this.status = ReqStatus.NO_CHANGE;
        } else if (prev > 0 && this.progress > prev) {
            this.status = ReqStatus.PROGRESS;
        }
    }

    clone() {
        return new Requirement(this.toJSON());
    }
}

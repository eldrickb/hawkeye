import { getReqData } from "./getData";
import Requirement from "./Requirement";
import { results } from "./Result";

export default class RequirementList {
    constructor(reqsJson) {
        this.reqs = {};

        if (reqsJson) {
            for (const [key, value] of Object.entries(reqsJson.semesters))
                this.reqs[key] = new Requirement(value);
        }
    }

    addReqById(reqId) {
        const req = getReqData(reqId);

        if (req) {
            this.reqs[req.id] = new Requirement(req);
            return results.SUCCESS;
        }

        return results.FAIL_ADD_REQ;
    }

    removeReqById(reqId) {
        if (reqId) return (this.reqs[req.id] = null);

        return false;
    }

    has(reqId) {
        return this.reqs[reqId] ? true : false;
    }

    get(reqId, createIfMissing = true) {
        if (!this.reqs[reqId]) {
            if (createIfMissing && !this.addReqById(reqId)) return false;
        }
        return this.reqs[reqId];
    }

    updateReqByCourse(course, isAdding = true) {
        let foundOne = results.FAIL_UPDATE_REQS;

        course.majorReqs.forEach((reqId) => {
            if (!foundOne) {
                this.get(reqId).update(course, isAdding);
                foundOne = results.SUCCESS;
            }
        });

        return foundOne;
    }

    updateReq(reqId, courseId) {
        const req = this.get(reqId);
        return req.update(courseId);
    }

    getStatus() {
        return this.reqs.map((req) => req.getStatus());
    }

    clone() {
        const newList = new RequirementsList();

        this.reqs.forEach((req) => {
            newList.addReq(req.clone());
        });

        return newList;
    }

    toJSON() {
        return this.reqs;
    }
}

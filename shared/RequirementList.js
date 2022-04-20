import Requirement from "./Requirement";
import reqsJson from "../public/reqs.json";

export default class RequirementList {
    constructor() {
        this.reqs = [];

        reqsJson.forEach((req) => {
            this.reqs[req.id] = new Requirement(req);
        });
    }

    add(req) {
        if (req) return (this.reqs[req.id] = req);

        return false;
    }

    remove(req) {
        if (req) return (this.reqs[req.id] = null);

        return false;
    }

    updateReq(reqId, courseId) {
        this.reqs[reqId].add(courseId);
    }

    getStatus() {
        return this.reqs.map((req) => req.getStatus());
    }
}

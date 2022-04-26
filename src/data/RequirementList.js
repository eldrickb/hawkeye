import Requirement from "./Requirement";

export default class RequirementList {
    constructor(reqsJson) {
        this.reqs = [];

        if (reqsJson)
            reqsJson.forEach((req) => {
                this.reqs[req.id] = new Requirement(req);
            });
    }

    addReq(req) {
        if (req) return (this.reqs[req.id] = req);

        return false;
    }

    removeReqById(reqId) {
        if (reqId) return (this.reqs[req.id] = null);

        return false;
    }

    has(reqId) {
        return this.reqs[reqId] ? true : false;
    }

    get(reqId) {
        return this.reqs[reqId];
    }

    updateReqByCourseId(courseId, isAdding = true) {
        let foundOne = false;

        courseId.prereqs.forEach((reqId) => {
            if (!foundOne && this.has(reqId)) {
                this.get(reqId).update(courseId, isAdding);
                foundOne = true;
            }
        });

        return foundOne;
    }

    updateReq(reqId, courseId) {
        this.reqs[reqId].add(courseId);
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
}

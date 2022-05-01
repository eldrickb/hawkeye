import coursesJson from "./courses.json";
import reqsJson from "./reqs.json";

import { results } from "./Result";

export const getCourseData = (courseId) => {
    const results = coursesJson.filter(
        (course) => course.id.toUpperCase() === courseId.toUpperCase(),
    );

    if (results.length === 1) return results[0];
    else if (results.length > 1) return results;
    else return results.FAIL_GET_COURSE_DATA_;
};

export const getReqData = (reqId) => {
    const results = reqsJson.filter(
        (req) => req.id.toUpperCase() === reqId.toUpperCase(),
    );

    if (results.length === 1) return results[0];
    else return false;
};

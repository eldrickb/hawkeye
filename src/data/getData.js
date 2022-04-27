import coursesJson from "./courses.json";
import reqsJson from "./reqs.json";

export const getCourseData = (courseId) => {
    const results = coursesJson.filter((course) => course.id === courseId);

    if (results.length === 1) return results[0];
    else if (results.length > 1) return results;
    else return false;
};

export const getReqData = (reqId) => {
    const results = reqsJson.filter((req) => req.id === reqId);

    if (results.length === 1) return results[0];
    else return false;
};

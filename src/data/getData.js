import courses from "./courses.json";
import reqsJson from "./reqs.json";

export const getCourseData = (courseId) => {
    const results = courses.filter((course) => course.id === courseId);

    if (results.length === 1) return results[0];
    else if (results.length > 1) return results;
    else return false;
};

export const results = {
    SUCCESS: "SUCCESS",
    FAIL: "FAIL",
    FAIL_VALIDATE_PREREQS: "FAIL_VALIDATE_PREREQS",
    FAIL_ADD_REQ: "FAIL_ADD_REQ",
    FAIL_UPDATE_REQS: "FAIL_UPDATE_REQS",
    FAIL_ADD_COURSE: "FAIL_ADD_COURSE",
    FAIL_ADD_SEMESTER: "FAIL_ADD_SEMESTER",
    FAIL_REMOVE_COURSE: "FAIL_REMOVE_COURSE",
    FAIL_INVALID_SEMESTER_ID: "FAIL_INVALID_SEMESTER_ID",
    FAIL_GET_COURSE_DATA: "FAIL_GET_COURSE_DATA",
};

export const validate = (result) => {
    return {
        success: result === results.SUCCESS,
        message: result,
    };
};

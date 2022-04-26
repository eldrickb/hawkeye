import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Course from "./Course";

const Semester = (props) => {
    return (
        <div>
            <h2>{props.semesterData.id}</h2>

            {props.semesterData.courses.courses.map((course) => (
                <Course courseData={course}></Course>
            ))}
        </div>
    );
};

// const mapState = (state) => ({
//     id: state.
// })

export default Semester;

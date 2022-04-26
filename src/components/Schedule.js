import { useEffect } from "react";
import { connect } from "react-redux";
import Schedule from "../data/Schedule";
import Semester from "./Semester";

const ScheduleView = (props) => {
    useEffect(() => {
        const sch = new Schedule();
    }, []);
    return (
        <div>
            <h1>Schedule</h1>

            {/* {props.scheduleData.semesters.map((sem) => (
                <Semester semesterData={sem}></Semester>
            ))} */}
        </div>
    );
};

const mapState = (state) => ({
    scheduleData: state.schedule,
});

const mapDispatch = (dispatch) => ({
    addCourse: dispatch.schedule.addCourse,
});

export default connect(mapState, mapDispatch)(ScheduleView);

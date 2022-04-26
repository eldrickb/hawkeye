import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Year from "../components/Year";
import { connect } from "react-redux";
import { useEffect } from "react";
import Schedule from "../data/Schedule";

const Playground = (props) => {
    useEffect(() => {
        const sch = new Schedule();

        console.log(sch);

        props.addCourse();
    }, []);

    return <div>hi</div>;
};

const mapState = (state) => ({
    scheduleData: state.user.schedule,
});

const mapDispatch = (dispatch) => ({
    addCourse: dispatch.user.addCourse,
});

export default connect(mapState, mapDispatch)(Playground);

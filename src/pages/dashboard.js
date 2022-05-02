import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Year from "../components/Year";
import { connect } from "react-redux";
import { useEffect } from "react";
import Schedule from "../data/Schedule";

const Dashboard = (props) => {
    useEffect(() => {}, []);

    return <div>{JSON.stringify(props.schedule)}</div>;
};

const mapState = (state) => ({
    schedule: state.user.schedule,
});
export default connect(mapState)(Dashboard);

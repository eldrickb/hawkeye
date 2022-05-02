import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Year from "../components/Year";
import { connect } from "react-redux";
import { useEffect } from "react";
import Schedule from "../data/Schedule";

import demoSchedule from "../utils/clientSchedule";

const Dashboard = (props) => {
    useEffect(() => {}, []);

    return <div>{JSON.stringify(demoSchedule)}</div>;
};

export default Dashboard;

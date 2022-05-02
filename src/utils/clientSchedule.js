import Schedule from "../data/Schedule";

const schedule = new Schedule();

schedule.addCourse("cs121", "fall19");
schedule.addCourse("math131", "fall19");

schedule.addCourse("cs187", "spring20");
schedule.addCourse("math132", "spring20");
schedule.addCourse("math235", "spring20");

schedule.addCourse("cs220", "fall20");
schedule.addCourse("cs240", "fall20");
schedule.addCourse("math233", "fall20");

schedule.addCourse("cs230", "spring21");
schedule.addCourse("cs250", "spring21");

schedule.addCourse("cs311", "fall21");
schedule.addCourse("cs325", "fall21");

schedule.addCourse("cs320", "fall21");
schedule.addCourse("cs377", "fall21");

const demoSchedule = schedule;
export default demoSchedule;

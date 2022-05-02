import Schedule from "../data/Schedule";
import demoSchedule from "./demoSchedule";

// console.log(JSON.stringify(demoSchedule));
export const user = {
    state: {
        schedule: demoSchedule,
    },

    reducers: {
        addCourse: (state, payload) => {
            console.log(state);

            return state;
        },
    },
};

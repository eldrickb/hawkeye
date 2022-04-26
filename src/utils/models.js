import Schedule from "../data/Schedule";

export const user = {
    state: {
        schedule: new Schedule(),
    },

    reducers: {
        addCourse: (state, payload) => {
            console.log(state);
            // state.addCourse("cs121", "fall21");
            // state.addCourse("cs121", "fall21");

            return state;
        },
    },
};

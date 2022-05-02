import { init } from "@rematch/core";
import * as models from "./models";
import persistPlugin from "@rematch/persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    callback: () => {},
};

const store = init({
    models,
    redux: {
        // TODO: make work
        rootReducers: { reset: () => undefined },
    },
    plugins: [
        // persistPlugin(persistConfig)
    ],
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import miscellaneousReducer from "../features/miscellaneous";

const store = configureStore({
    reducer: {
        miscellaneous: miscellaneousReducer
    }
});

export default store;
import { configureStore } from "@reduxjs/toolkit";

import activeCordReducer from "./features/engine";
import settingsSlice from "./features/settings";

export const store = configureStore({
    reducer: {
        activeCord: activeCordReducer,
        settings: settingsSlice,
    },
});

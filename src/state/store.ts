import { configureStore } from "@reduxjs/toolkit";

import filterSlice from "./features/engine";
import settingsSlice from "./features/settings";

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        settings: settingsSlice,
    },
});

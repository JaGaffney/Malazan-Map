import { configureStore } from "@reduxjs/toolkit";

import activeCordReducer from "./features/engine";

export const store = configureStore({
    reducer: {
        activeCord: activeCordReducer,
    },
});

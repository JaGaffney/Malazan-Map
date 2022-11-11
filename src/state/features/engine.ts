import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeCord: { x: 0, y: 0 },
};

export const activeCordSlice = createSlice({
    name: "activeCord",
    initialState,
    reducers: {
        update: (state) => {
            state.activeCord = { x: 28.32, y: 58.33 };
        },
        reset: (state) => {
            state.activeCord = { x: 0, y: 0 };
        },
    },
});

export const { update, reset } = activeCordSlice.actions;

export default activeCordSlice.reducer;

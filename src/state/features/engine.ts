import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeCord: { x: 0, y: 0 },
    activeID: 0,
};

export const activeCordSlice = createSlice({
    name: "activeCord",
    initialState,
    reducers: {
        update: (state, action) => {
            state.activeCord = action.payload;
        },
        reset: (state) => {
            state.activeCord = { x: 0, y: 0 };
        },
        updateActiveID: (state, action) => {
            state.activeID = action.payload;
        },
    },
});

export const { update, reset, updateActiveID } = activeCordSlice.actions;

export default activeCordSlice.reducer;

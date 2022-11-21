import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeCord: { x: 0, y: 0 },
    activeID: 0,
    activeData: {},
    activeCharacter: null,
    flattern: false,
    moon: [47, -5, 70],
    city: { location: [47, -5, 70], name: "" },
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
        updateActiveData: (state, action) => {
            state.activeData = action.payload;
        },
        flattern: (state) => {
            state.flattern = !state.flattern;
        },
        updateMoon: (state, action) => {
            state.moon = action.payload;
        },
        updateCity: (state, action) => {
            state.city = action.payload;
        },
        updateActiveCharacter: (state, action) => {
            state.activeCharacter = action.payload;
        },
    },
});

export const { update, reset, updateActiveID, updateActiveData, flattern, updateMoon, updateCity, updateActiveCharacter } = activeCordSlice.actions;

export default activeCordSlice.reducer;

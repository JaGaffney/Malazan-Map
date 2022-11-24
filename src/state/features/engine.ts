import { createSlice } from "@reduxjs/toolkit";

interface Cord {
    x: number;
    y: number;
}

export interface IRootState {
    loaded: boolean;
    activeCord: Cord;
    activeID: number;
    activeData: Object;
    activeCharacter: null | number;
    flattern: boolean;
    moon: Array<number>;
    city: Object;
}

const initialState: IRootState = {
    loaded: false,
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
        loaded: (state) => {
            state.loaded = true;
        },
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

export const { loaded, update, reset, updateActiveID, updateActiveData, flattern, updateMoon, updateCity, updateActiveCharacter } = activeCordSlice.actions;

export default activeCordSlice.reducer;

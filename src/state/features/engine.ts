import { createSlice } from "@reduxjs/toolkit";
import { filterArray } from "../../components/utils/filter";

interface Cord {
    x: number;
    y: number;
}

export interface IRootState {
    activeCord: Cord;
    activeID: number;
    activeData: number;
    activeBooks: Array<number | "">;
    activeCharacter: null | number;
    flattern: boolean;
    moon: Array<number>;
    city: Object;
}

const initialState: IRootState = {
    activeCord: { x: 0, y: 0 },
    activeID: 0,
    activeData: 0,
    activeBooks: [1, 2, 3],
    activeCharacter: null,
    flattern: false,
    moon: [47, -5, 70],
    city: { location: [420, 15, 185.59], name: "Malaz City", owner: "malazan", type: 1 },
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
        updateActiveBooks: (state, action) => {
            state.activeBooks = filterArray(state.activeBooks, action.payload);
        },
        resetActiveBooks: (state) => {
            state.activeBooks = [1, 2, 3];
        },
    },
});

export const { update, reset, updateActiveID, updateActiveData, flattern, updateMoon, updateCity, updateActiveCharacter, updateActiveBooks, resetActiveBooks } = activeCordSlice.actions;

export default activeCordSlice.reducer;

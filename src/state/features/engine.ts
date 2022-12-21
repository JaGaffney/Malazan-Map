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
    activeBooks: Array<number>;
    activeCharacter: Array<number>;
    activeCity: Array<number>;
    moon: Array<number>;
}

const initialState: IRootState = {
    activeCord: { x: 0, y: 0 },
    activeID: 0,
    activeData: 0,
    activeBooks: [1, 2, 3],
    activeCharacter: [],
    moon: [47, -5, 70],
    activeCity: [0],
};

export const filterSlice = createSlice({
    name: "filter",
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
        updateMoon: (state, action) => {
            state.moon = action.payload;
        },
        updateActiveCity: (state, action) => {
            state.activeCity = filterArray(state.activeCity, action.payload);
        },
        resetActiveCity: (state) => {
            state.activeCity = [];
        },
        updateActiveCharacter: (state, action) => {
            state.activeCharacter = filterArray(state.activeCharacter, action.payload);
        },
        resetActiveCharacter: (state) => {
            state.activeCharacter = [];
        },
        updateActiveBooks: (state, action) => {
            state.activeBooks = filterArray(state.activeBooks, action.payload);
        },
        resetActiveBooks: (state) => {
            state.activeBooks = [1, 2, 3];
        },
    },
});

export const { update, reset, updateActiveID, updateActiveData, updateMoon, updateActiveCity, resetActiveCity, updateActiveCharacter, resetActiveCharacter, updateActiveBooks, resetActiveBooks } =
    filterSlice.actions;

export default filterSlice.reducer;

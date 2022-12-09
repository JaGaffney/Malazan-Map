import { createSlice } from "@reduxjs/toolkit";
import { filterArray } from "../../components/utils/filter";

export interface IRootState {
    flattern: boolean;
    shadows: boolean;
    deserts: boolean;
    mourtains: boolean;
    ice: boolean;
    forest: boolean;
    areas: Array<number>;
}

const initialState: IRootState = {
    flattern: false,
    shadows: true,
    deserts: true,
    forest: true,
    mourtains: true,
    ice: true,
    areas: [1, 2, 3],
};

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        reset: (state) => {
            state = initialState;
        },
        flattern: (state) => {
            state.flattern = true;
        },
        raise: (state) => {
            state.flattern = false;
        },
        addShadows: (state) => {
            state.shadows = true;
        },
        removeShadows: (state) => {
            state.shadows = false;
        },
        addDeserts: (state) => {
            state.deserts = true;
        },
        removeDeserts: (state) => {
            state.deserts = false;
        },
        addForests: (state) => {
            state.forest = true;
        },
        removeForests: (state) => {
            state.forest = false;
        },
        updateActiveAreas: (state, action) => {
            state.areas = filterArray(state.areas, action.payload);
        },
        resetActiveAreas: (state) => {
            state.areas = [1, 2, 3, 4, 5, 6, 7, 8];
        },
    },
});

export const { reset, flattern, raise, addShadows, removeShadows, addDeserts, removeDeserts, addForests, removeForests, updateActiveAreas, resetActiveAreas } = settingsSlice.actions;

export default settingsSlice.reducer;

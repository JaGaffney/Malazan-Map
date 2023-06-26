import { createSlice } from "@reduxjs/toolkit";
import { filterArray } from "../../components/utils/filter";

export interface IRootState {
    flattern: boolean;
    shadows: boolean;
    deserts: boolean;
    moutains: boolean;
    ice: boolean;
    forest: boolean;
    areas: Array<number>;
}

const initialState: IRootState = {
    flattern: false,
    shadows: true,
    deserts: true,
    forest: true,
    moutains: true,
    ice: true,
    areas: [1, 2, 3, 4, 5, 6, 7, 8],
};

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setNone: (state) => {
            state.flattern = true;
            state.shadows = false;
            // state.areas = [];
        },
        setBasic: (state) => {
            state.flattern = true;
            state.shadows = false;
            state.areas = [1, 2, 3];
        },
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

export const { setBasic, setNone, reset, flattern, raise, addShadows, removeShadows, addDeserts, removeDeserts, addForests, removeForests, updateActiveAreas, resetActiveAreas } =
    settingsSlice.actions;

export default settingsSlice.reducer;

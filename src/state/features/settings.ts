import { createSlice } from "@reduxjs/toolkit";
import { filterArray } from "../../components/utils/filter";

export interface IRootState {
    dayNight: boolean;
    night: boolean;
    flattern: boolean;
    shadows: boolean;
    terrain: boolean;
    areas: Array<number>;
}

const initialState: IRootState = {
    dayNight: true,
    night: false,
    flattern: false,
    shadows: true,
    terrain: true,
    areas: [1, 2, 3, 4, 5, 6, 7, 8],
};

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setNone: (state) => {
            state.dayNight = false;
            state.flattern = true;
            state.shadows = false;
            // state.areas = [];
        },
        setBasic: (state) => {
            state.dayNight = false;
            state.flattern = true;
            state.shadows = false;
            state.areas = [1, 2, 3, 6];
        },
        reset: (state) => {
            state = initialState;
        },
        dayNightOn: (state) => {
            state.dayNight = true;
            state.night = false;
        },
        dayNightOff: (state) => {
            state.dayNight = false;
        },
        nightOn: (state) => {
            state.night = true;
            state.dayNight = false;
        },
        nightOff: (state) => {
            state.night = false;
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
        addTerrain: (state) => {
            state.terrain = true;
        },
        removeTerrain: (state) => {
            state.terrain = false;
        },
        updateActiveAreas: (state, action) => {
            state.areas = filterArray(state.areas, action.payload);
        },
        resetActiveAreas: (state) => {
            state.areas = [1, 2, 3, 4, 5, 6, 7, 8];
        },
    },
});

export const { setBasic, setNone, reset, dayNightOn, dayNightOff, nightOn, nightOff, flattern, raise, addShadows, removeShadows, addTerrain, removeTerrain, updateActiveAreas, resetActiveAreas } =
    settingsSlice.actions;

export default settingsSlice.reducer;

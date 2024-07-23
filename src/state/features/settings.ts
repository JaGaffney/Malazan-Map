import { createSlice } from "@reduxjs/toolkit";
export interface IRootState {
    dayNight: boolean;
    night: boolean;
    flattern: boolean;
    shadows: boolean;
    terrain: boolean;
}

const initialState: IRootState = {
    dayNight: true,
    night: false,
    flattern: false,
    shadows: true,
    terrain: true,
};

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setNone: (state) => {
            state.dayNight = false;
            state.flattern = true;
            state.shadows = false;
        },
        setBasic: (state) => {
            state.dayNight = false;
            state.flattern = true;
            state.shadows = false;
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
    },
});

export const { setBasic, setNone, reset, dayNightOn, dayNightOff, nightOn, nightOff, flattern, raise, addShadows, removeShadows, addTerrain, removeTerrain } = settingsSlice.actions;

export default settingsSlice.reducer;

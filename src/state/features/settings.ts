import { createSlice } from "@reduxjs/toolkit";
export interface IRootState {
    dayNight: boolean;
    night: boolean;
    flattern: boolean;
    shadows: boolean;
    terrain: boolean;
    lights: boolean;
}

const initialState: IRootState = {
    dayNight: true,
    night: false,
    flattern: false,
    shadows: true,
    terrain: true,
    lights: true,
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

        nightToggle: (state) => {
            state.night = !state.night;
        },
        topographyToggle: (state) => {
            state.flattern = !state.flattern;
        },
        shadowToggle: (state) => {
            state.shadows = !state.shadows;
        },
        terrainToggle: (state) => {
            state.terrain = !state.terrain;
        },

        lightToggle: (state) => {
            state.lights = !state.lights;
        },
    },
});

export const { setNone, reset, dayNightOn, dayNightOff, nightToggle, topographyToggle, shadowToggle, terrainToggle, lightToggle } = settingsSlice.actions;

export default settingsSlice.reducer;

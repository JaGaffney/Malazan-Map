import { createSlice } from "@reduxjs/toolkit";

export interface IRootState {
    flattern: boolean;
    shadows: boolean;
    deserts: boolean;
    mourtains: boolean;
    ice: boolean;
    forest: boolean;
    areas: Object;
}

const initialState: IRootState = {
    flattern: false,
    shadows: true,
    deserts: true,
    forest: true,
    mourtains: true,
    ice: true,

    areas: {
        genabackis: true,
        seven_cities: true,
        quon_tali: true,
        korelri: true,
        jacuruku: true,
        bael: true,
        lether: true,
        stratem: true,
        genostel: true,
    },
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
    },
});

export const { reset, flattern, raise, addShadows, removeShadows, addDeserts, removeDeserts, addForests, removeForests } = settingsSlice.actions;

export default settingsSlice.reducer;

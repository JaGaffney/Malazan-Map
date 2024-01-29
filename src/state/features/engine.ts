import { createSlice } from "@reduxjs/toolkit";
import { filterArray } from "../../components/utils/filter";

interface Cord {
    x: number;
    y: number;
}

interface ActiveData {
    id: string;
    book: number;
    name: string;
    icon: any;
    description: string;
    char: Array<number | null>;
    loc: Array<number | null>;
    area: number;
}

export interface IRootState {
    activeCord: Cord;
    activeData: ActiveData;
    activeBooks: Array<number>;
    activeCharacter: Array<number>;
    activeCity: Array<number>;
    search: string;
}

const defaultActiveData = {
    id: "",
    book: 0,
    name: "",
    icon: "",
    description: "",
    char: [],
    loc: [],
    area: 0,
};

const initialState: IRootState = {
    activeCord: { x: 0, y: 0 },
    activeData: defaultActiveData,
    activeBooks: [1, 2, 3, 4],
    activeCharacter: [],
    activeCity: [0],
    search: "",
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
        updateActiveData: (state, action) => {
            state.activeData = action.payload;
        },
        resetActiveData: (state) => {
            state.activeData = defaultActiveData;
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
            state.activeBooks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        },
        updateSearch: (state, action) => {
            state.search = action.payload;
        },
    },
});

export const { update, reset, updateActiveData, resetActiveData, updateActiveCity, resetActiveCity, updateActiveCharacter, resetActiveCharacter, updateActiveBooks, resetActiveBooks, updateSearch } =
    filterSlice.actions;

export default filterSlice.reducer;

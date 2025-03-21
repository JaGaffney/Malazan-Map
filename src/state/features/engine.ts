import { createSlice } from "@reduxjs/toolkit";
import { filterArray } from "../../components/utils/filter";
import { localStorageSave, onLoadDataFromLocalStorage } from "../../components/utils/save";

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
}

export interface IRootState {
    activeCord: Cord;
    activeData: ActiveData;
    activeBooks: Array<number>;
    activeCharacter: Array<number>;
    activeCity: Array<number>;
    search: string;
    areas: boolean;
}

const onBookLoad = () => {
    let data = onLoadDataFromLocalStorage();
    if (data !== null) {
        return data;
    }
    return [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 201, 202];
};

const defaultActiveData = {
    id: "",
    book: 0,
    name: "",
    icon: "",
    description: "",
    char: [],
    loc: [],
};

const initialState: IRootState = {
    activeCord: { x: 0, y: 0 },
    activeData: defaultActiveData,
    activeBooks: onBookLoad(),
    activeCharacter: [],
    activeCity: [1, 2],
    areas: true,
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
            const newBooks = filterArray(state.activeBooks, action.payload);
            state.activeBooks = newBooks;
            localStorageSave(newBooks);
        },
        resetActiveBooks: (state) => {
            state.activeBooks = [];
        },
        updateSearch: (state, action) => {
            state.search = action.payload;
        },
        setAreas: (state) => {
            state.areas = true;
        },
        resetAreas: (state) => {
            state.areas = false;
        },
    },
});

export const {
    update,
    reset,
    updateActiveData,
    resetActiveData,
    updateActiveCity,
    resetActiveCity,
    updateActiveCharacter,
    resetActiveCharacter,
    updateActiveBooks,
    resetActiveBooks,
    updateSearch,
    setAreas,
    resetAreas,
} = filterSlice.actions;

export default filterSlice.reducer;

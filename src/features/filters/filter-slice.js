import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: "filter",
    initialState: [],
    reducers: {
        AddFilter: (state, action) => {
            if (!state.includes(action.payload)) {
            state.push(action.payload);
        }
        },
        DeleteFilter: (state, action) => {
            return state.filter(item => item !== action.payload)
        },
        EmptyFilter: () => [],
    },
})

export const {AddFilter, DeleteFilter, EmptyFilter} = filterSlice.actions;

export const FilterReducer = filterSlice.reducer;

export const FilterSelector = (state) => state.filter
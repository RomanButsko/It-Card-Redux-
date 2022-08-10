import { createSlice } from '@reduxjs/toolkit';


const positionsSlice = createSlice({
    name: 'positions',
    initialState: [],
    reducers: {
        AddPosition: (_, action) => {
            return action.payload
        }
    }
})

export const {AddPosition} = positionsSlice.actions;
export const AddPositionReducer = positionsSlice.reducer;


export const selectAllPositions = (state) => state.position;

export const selectVisiblePositions = (state, filters = []) => {
    if (filters.length === 0) return state.position

    return state.position.filter((item) => {
        const posFilter = [].concat(item.role, item.level, ...item.languages, ...item.tools);
        return filters.every(i => posFilter.includes(i));
    })
}
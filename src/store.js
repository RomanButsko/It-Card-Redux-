import { configureStore } from '@reduxjs/toolkit'
import { FilterReducer } from 'features/filters/filter-slice'
import { AddPositionReducer } from 'features/positions/positions-slice'

export const store = configureStore({
    reducer: {
        position: AddPositionReducer,
        filter: FilterReducer
    },
    devTools: true,
})
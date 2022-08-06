import { combineReducers } from 'redux'
import { AddPositionReducer } from './positions/position-reducers'
import {FilterReducer} from './filters/filter-reducer'

export const rootReducer = combineReducers({
    position: AddPositionReducer,
    filter: FilterReducer
})
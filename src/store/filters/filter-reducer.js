import { AddFilter, DeleteFilter, EmptyFilter } from './filter-actions'

export const FilterReducer = (state = [], action) => {
    switch(action.type) {
        case AddFilter: {
            if (state.includes(action.filter)) return state;
            return [...state, action.filter]
        }
        case DeleteFilter: {
            return state.filter(item => item !== action.filter)
        }
        case EmptyFilter: {
            return []
        }
        default: {
            return state
        }
    }
}
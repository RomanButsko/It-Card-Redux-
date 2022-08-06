const { addFilter, deleteFilter, EmptyFilter } = require('./filter-actions')

export const FilterReducer = (state = [], action) => {
    switch(action.type) {
        case addFilter: {
            if (state.includes(action.filter)) return state;
            return [...state, action.filter]
        }
        case deleteFilter: {
            return state.filter(item => item !== action.type)
        }
        case EmptyFilter: {
            return []
        }
        default: {
            return state
        }
    }
}
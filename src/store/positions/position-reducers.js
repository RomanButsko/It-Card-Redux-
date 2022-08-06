import { AddPosition } from './position-actions'

export const AddPositionReducer = (state = [], action) => {
    switch(action.type) {
        case AddPosition: {
            return action.filter
        }
        default: {
            return state
    }
    }
}

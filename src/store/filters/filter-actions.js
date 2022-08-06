const AddFilter = 'AddFilter';
const EmptyFilter = 'EmptyFilter';
const DeleteFilter = 'DeleteFilter';

export const addFilter = (filter) => {
    return ({type: AddFilter, filter})
} 
export const deleteFilter = (filter) => {
return ({type: DeleteFilter, filter})
} 
export const emptyFilter = () => {
    return ({type: EmptyFilter})
} 
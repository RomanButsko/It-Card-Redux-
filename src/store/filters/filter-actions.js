export const AddFilter = 'AddFilter';
export const EmptyFilter = 'EmptyFilter';
export const DeleteFilter = 'DeleteFilter';

export const addFilter = (filter) => ({type: AddFilter, filter}) 
export const deleteFilter = (filter) => ({type: DeleteFilter, filter})
export const emptyFilter = () => ({type: EmptyFilter})

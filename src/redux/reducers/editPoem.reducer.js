const editPoem = (state  = {}, action) => {
    if (action.type === 'SET_EDIT_POEM') {
        return action.payload
    } else if(action.type === 'EDIT_ONCHANGE') {
        return {
         
            ...state,
           
            [action.payload.property]: action.payload.value
        }
    } else if(action.type === 'EDIT_CLEAR') {
        return state
    }
    return state;
}

export default editPoem

const favorites = (state = [], action)=>{
        switch (action.type){
            case 'SET_FAV':
                return action.payload
            case 'ADD_FAV':
                return [...state, action.payload]
            default:
                return state         
        }
    }
export default favorites 
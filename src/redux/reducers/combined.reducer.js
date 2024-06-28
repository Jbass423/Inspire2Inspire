const combined = (state=[], action)=>{
    switch (action.type){
        case "SET_COMBINED":
            return action.payload;
          default :
          return state   
    }
}

export default combined 
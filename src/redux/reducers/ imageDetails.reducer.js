

const imageDetails = (state = [], action) => {
    switch (action.type) {
        case 'SET_IMAGE_DETAILS':
            return  action.payload
              
        default:
            return state;
    }
};

export default imageDetails
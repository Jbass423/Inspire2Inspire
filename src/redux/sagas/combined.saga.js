import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* fetchcombined (action){
    try{
        const response = yield axios.get(`/api/poems?imageId=${action.payload}`);
        yield put({ type: 'SET_COMBINED', payload: response.data });
    } catch (error) {
        console.error('Error fetching poems by image ID:', error);
    }
}


function* combinedSaga (){
    yield takeLatest("FETCH_POEMS_BY_IMAGE_ID", fetchcombined)
}

export default  combinedSaga
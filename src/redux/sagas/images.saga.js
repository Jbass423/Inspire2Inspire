import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchImages (action){
    try{
        const response = yield axios.get('api/images', {params: action.payload});
        const setImages = response.data 
        console.log("checking data response ", setImages);

        yield put ({ type: 'SET_IMAGES', payload: setImages});

    } catch (error){
        console.log("failed to get set images ", error );
    }
}function* imagesSaga() {
    yield takeLatest('FETCH_IMAGES', fetchImages);
  }

export default imagesSaga
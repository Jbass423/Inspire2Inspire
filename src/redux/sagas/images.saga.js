import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchImages(action) {
    try {
        const response = yield axios.get('api/images', { params: action.payload });
        const setImages = response.data


        yield put({ type: 'SET_IMAGES', payload: setImages });

    } catch (error) {
        console.log("failed to get set images ", error);
    }
}

function* fetchImageDetails(action) {
    try {
      const response = yield axios.get(`/api/images/${action.payload}`);
      yield put({ type: 'SET_IMAGE_DETAILS', payload: response.data });
    } catch (error) {
      console.error('Error fetching image details:', error);
    }
  }


function* sendImage(action) {
    try {
        const response = yield axios.post('/api/images', action.payload);
        const imageId = response.data.imageId;

        // Dispatch an action with the imageId to the Redux store
        yield put({ type: 'UPLOAD_DONE', payload: { id: imageId, url: action.payload.url, user_id: action.payload.user_id } });
    } catch (error) {
        console.log('Failed in gen post function', error);
        yield put({ type: 'UPLOAD_FAILED', error });
    }
}




function* imagesSaga() {
    yield takeLatest('FETCH_IMAGES', fetchImages);
    yield takeLatest('FETCH_IMAGE_DETAILS', fetchImageDetails)
    yield takeLatest ('SEND_IMAGE', sendImage)

}

export default imagesSaga 
import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

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

function* uploadImage() {
    yield takeLatest('SEND_IMAGE', sendImage);
}

export default uploadImage;
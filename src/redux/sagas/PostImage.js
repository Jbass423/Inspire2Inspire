import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* sendImage (action){
    try{
        yield axios.post('/api/images', action.payload)
        yield put({type:'UPLOAD_DONE'});
    } catch (error){
        console.log('failed in gen post function', error )
    }
}

function* uploadImage ( ){
    yield takeLatest('SEND_IMAGE', sendImage)
}

export default uploadImage
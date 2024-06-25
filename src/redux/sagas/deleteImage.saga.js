import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

function* deleteImage( action){
try{
    const id = action.payload
    yield axios.delete(`/api/images/${id}`)
        yield put ({ type: "DELETE_WORKED", payload: id })
    
} catch(error){
    console.log("error in deleyt gen fun", error )
}

}

function* Delete  () {
 yield takeLatest('DELETE_IMAGE', deleteImage )
}

export default Delete 
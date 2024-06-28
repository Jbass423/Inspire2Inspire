import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* fetchcombined (action){
    try{
        const response = yield axios.get('/api/images/combined');
        yield put ({type: 'SET_COMBINED', payload: action.payload })
    }catch (error){
        console.log("error in combined saga", error);
        
    }
}

function* combinedSaga (){
    yield takeLatest("FETCH_COMBINED", fetchcombined)
}

export default  combinedSaga
import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchPoems (action){
    try{
        const response = yield axios.get('api/poems', {params: action.payload})
        const setPoems = response.data
        console.log(" checking date in poems ", setPoems)

        yield put ({type: 'SET_POEMS', payload: setPoems})
    } catch (error){
        console.log("failed in to get set poems ", error )

    }
}

function* poemsSaga (){
   yield takeLatest('FETCH_POEMS', fetchPoems)
}

export default poemsSaga
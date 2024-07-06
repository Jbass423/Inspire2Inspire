import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchFav(action) {
    try {
        const response = yield axios.get('/api/favorites', {
            params: action.payload
        });
        const setFav = response.data;

        yield put({ type: "SET_FAV", payload: setFav });
    } catch (error) {
        console.log("error in fav saga", error);
    }
}

function* addFav(action) {
    try {
        const response = yield axios.post('/api/favorites', action.payload);
        yield put({ type: 'ADD_FAV', payload: response.data });
    } catch (error) {
        console.log("error in add fav saga", error);
    }
}

function* favSaga() {
    yield takeLatest('FETCH_FAV', fetchFav);
    yield takeLatest('ADD_FAV_REQUEST', addFav)
}

export default favSaga;

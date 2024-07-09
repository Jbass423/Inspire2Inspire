import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchPoems(action) {
    try {
        const response = yield axios.get('/api/poems', { params: action.payload })
        const setPoems = response.data


        yield put({ type: 'SET_POEMS', payload: setPoems })
    } catch (error) {
        console.log("failed in to get set poems ", error)

    }
}

function* addLike(action) {
    try {
        const { id } = action.payload;

        const response = yield axios.put(`/api/poems/likes/${id}`);
        yield put({ type: 'UPDATE_LIKE', payload: id });
    } catch (error) {
        console.error('Error updating likes:', error);
        yield put({ type: 'UPDATE_LIKE_FAILURE', error });
    }
}

function* addPoem(action) {
    try {

        const response = yield axios.post('/api/poems', action.payload)
        console.log("checking post poem data", response.data)
        yield put({ type: 'FETCH_POEMS' })
    } catch (error) {
        console.log("error in post addpoem", error)
    }
}

function* deletePoem(action) {
    try {
        const { id } = action.payload;
        yield axios.delete(`/api/poems/${id}`);
        yield put({ type: 'DELETE_POEM', payload: id });
    } catch (error) {
        console.log('Error in deletePoem saga', error);
    }
}

function* fetchPoemsByUserId(action) {
    try {
        const response = yield axios.get(`/api/poems/user/${action.payload}`);
        yield put({ type: 'SET_POEMS', payload: response.data });
    } catch (e) {
        console.error('Failed to fetch poems', e);
    }
}

function* poemsSaga() {
    yield takeLatest('FETCH_POEMS', fetchPoems)
    yield takeLatest('ADD_POEM', addPoem)
    yield takeLatest('DELETE_POEM', deletePoem)
    yield takeLatest('ADD_LIKE', addLike)
    yield takeLatest('FETCH_POEMS_BY_USER_ID', fetchPoemsByUserId)
}

export default poemsSaga
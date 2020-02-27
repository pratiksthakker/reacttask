import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import {loadUsersSuccess, LOAD_ITEMS_ERROR, LOAD_ITEMS_LOADING, LOAD_ITEMS_SUCCESS} from "./actions";
import Api from '../../api'

async function fetchAsync(func) {
    const response = await func();

    if (response.ok) {
        return await response.json();
    }

    throw new Error("Unexpected error!!!");
}

function* fetchItems() {
    try {
        const items = yield fetchAsync(Api.getItems);

        yield put({type: LOAD_ITEMS_SUCCESS, data: items});
    } catch (e) {
        yield put({type: LOAD_ITEMS_ERROR, error: e.message});
    }
}

export function* usersSaga() {
    
    yield takeEvery(LOAD_ITEMS_LOADING, fetchItems);

}

export default usersSaga;
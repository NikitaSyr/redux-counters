import {all, fork} from 'redux-saga/effects'
import countersSaga from "./countersSaga";

export default function* rootSaga() {
    yield all([
        fork(countersSaga)
    ])
}
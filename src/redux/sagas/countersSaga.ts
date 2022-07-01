import {call, put, SagaReturnType, takeLatest, all, select} from "redux-saga/effects";
import {AUTOMATIC_INCREASE_VALUE_BY_COUNTER_ID, getCountersList} from "../countersReducer";
import {TakeableChannel} from "redux-saga";

function* automaticIncreaseValueSaga() {
    // @ts-ignore
    const countersList = yield select(getCountersList)
    console.log(countersList)

    // @ts-ignore
    const runner = yield call(setInterval, () => {
        console.log('yes');
    }, 1000);
    // console.log(runner);

}

function* countersSaga() {
    yield all([
        takeLatest(AUTOMATIC_INCREASE_VALUE_BY_COUNTER_ID as unknown as TakeableChannel<unknown>, automaticIncreaseValueSaga)
    ]);
}

export default countersSaga;
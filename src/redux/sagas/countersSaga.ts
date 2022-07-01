import {call, put, takeLatest, all, select, delay} from "redux-saga/effects";
import {actions, AUTOMATIC_INCREASE_VALUE, getCountersList} from "../countersReducer";
import {COUNTERS_INTERVAL} from "../../constants/constants";
import {ICounter} from "../../types/types";

function* automaticIncreaseValueSaga() {
    const countersList: ICounter[] = yield select(getCountersList);
    yield all(countersList.map((item: ICounter) => (item.automaticIncrementFlag) && put(actions.increaseCounterValueAC(item.counterId))
    ))
}

function* automaticIncreaseValueSagaPeriodically() {
    while (true) {
        yield call(automaticIncreaseValueSaga);
        yield delay(COUNTERS_INTERVAL);
    }
}

function* countersSaga() {
    yield all([
        takeLatest(AUTOMATIC_INCREASE_VALUE, automaticIncreaseValueSagaPeriodically)
    ]);
}

export default countersSaga;
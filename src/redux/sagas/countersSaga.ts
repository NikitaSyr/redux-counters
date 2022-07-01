import {call, put, take, takeLatest, all, select, delay, putResolve} from "redux-saga/effects";
import {actions, AUTOMATIC_INCREASE_VALUE, getCountersList} from "../countersReducer";
import {TakeableChannel} from "redux-saga";
import {AUTOMATIC_COUNTER_VALUE, COUNTERS_INTERVAL} from "../../constants/constants";
import {ICounter} from "../../types/types";

function* automaticIncreaseValueSaga() {
    // @ts-ignore
    // yield all(countersList.map((item: ICounter) => {
    //     if (item.automaticIncrementFlag) {
    //         console.log(item.counterId)
    //         putResolve(actions.increaseCounterValueAC(item.counterId))
    //     }
    //     return
    // }))

    const countersList = yield select(getCountersList);
    yield all(countersList.map((item: ICounter) => (item.automaticIncrementFlag) && put(actions.increaseCounterValueAC(item.counterId))
    ))
    // yield setInterval(()=> {
    //     const countersList = select(getCountersList);
    //     console.log(countersList);
         // (countersList.payload.map((item: ICounter) => {
         //     console.log(countersList)
         //     console.log(item)
         //        if (item.automaticIncrementFlag) {
         //            console.log(item.counterId)
         //            put(actions.increaseCounterValueAC(item.counterId))
         //        }
         //        return
         //    }))
    // }, COUNTERS_INTERVAL)


    // yield putResolve(
    //     actions.increaseCounterValueAC("0")
    // );


    // if (item.automaticIncrementFlag) {
    //     put(actions.increaseCounterValueAC(item.counterId))
    //     console.log(item.counterId)
    // }
    // }))
    // console.log(countersList)
    // @ts-ignore
    // console.log("s")
    // const runner = yield call(setInterval, () => {
    //     console.log(countersList);
    //
    // }, 1000);
    // console.log(runner);

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
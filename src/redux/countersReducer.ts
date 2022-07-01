import {
    AddCounter, AutomaticIncreaseCounterValue,
    DecreaseCounterValue,
    DeleteCounter,
    ICounter,
    IncreaseCounterValue
} from "../types/types";
import {AppState} from "./reduxStore";
import {AUTOMATIC_COUNTER_VALUE} from "../constants/constants";

export const ADD_COUNTER = "redux-counters/counters/ADD_COUNTER";
export const DELETE_COUNTER = "redux-counters/counters/DELETE_COUNTER";
export const INCREASE_VALUE_BY_COUNTER_ID = "redux-counters/counters/INCREASE_VALUE_BY_COUNTER_ID";
export const DECREASE_VALUE_BY_COUNTER_ID = "redux-counters/counters/DECREASE_VALUE_BY_COUNTER_ID";
export const AUTOMATIC_INCREASE_VALUE = "redux-counters/counters/AUTOMATIC_INCREASE_VALUE";

interface IState {
    countersList: ICounter[],
    totalUniqCountersCount: number
}

const initialState: IState = {
    countersList: [
        // {
        //     counterId: "0",
        //     currentValue: 0,
        //     automaticIncrementFlag: false
        // }
    ],
    totalUniqCountersCount: 0
};

export const countersReducer = (state = initialState, action: any): IState => {
    switch (action.type) {
        case ADD_COUNTER: {
            const currentUniqCountersCount = state.totalUniqCountersCount + 1;
            const valuesSum = state.countersList.reduce(function (sum: number, item: ICounter) {
                return sum + item.currentValue
            }, 0)
            let isAutomaticIncrementFlag = false
            if (currentUniqCountersCount % AUTOMATIC_COUNTER_VALUE === 0 && currentUniqCountersCount !== 0) {
                isAutomaticIncrementFlag = true
            }
            const newCounter = {
                counterId: (state.totalUniqCountersCount + 1).toString(),
                currentValue: valuesSum,
                automaticIncrementFlag: isAutomaticIncrementFlag
            }
            return {
                ...state,
                totalUniqCountersCount: currentUniqCountersCount,
                countersList: [...state.countersList, newCounter]
            }
        }
        case DELETE_COUNTER: {
            const changedCountersList = state.countersList.filter(item => action.payload.counterId !== item.counterId)
            return {
                ...state,
                countersList: changedCountersList
            }
        }
        case INCREASE_VALUE_BY_COUNTER_ID: {
            const counterId = state.countersList.findIndex(item => item.counterId === action.payload.counterId);
            const changedCountersList = [...state.countersList];
            changedCountersList[counterId].currentValue = changedCountersList[counterId].currentValue + 1
            return {
                ...state,
                countersList: changedCountersList
            }
        }
        case DECREASE_VALUE_BY_COUNTER_ID: {
            const counterId = state.countersList.findIndex(item => item.counterId === action.payload.counterId);
            const changedCountersList = [...state.countersList];
            changedCountersList[counterId].currentValue = changedCountersList[counterId].currentValue - 1
            return {
                ...state,
                countersList: changedCountersList
            }
        }
        default:
            return state;
    }
};

export const actions = {
    addCounterAC: (): AddCounter => ({
        type: ADD_COUNTER,
    }),
    deleteCounterAC: (counterId: string): DeleteCounter => ({
        type: DELETE_COUNTER,
        payload: {counterId}
    }),
    increaseCounterValueAC: (counterId: string): IncreaseCounterValue => ({
        type: INCREASE_VALUE_BY_COUNTER_ID,
        payload: {counterId}
    }),
    decreaseCounterValueAC: (counterId: string): DecreaseCounterValue => ({
        type: DECREASE_VALUE_BY_COUNTER_ID,
        payload: {counterId}
    }),
    automaticIncreaseCounterValueAC: (): AutomaticIncreaseCounterValue => ({
        type: AUTOMATIC_INCREASE_VALUE,
    })
};

export const getCountersList = (state: AppState): ICounter[] => {
    return state.countersPage.countersList
}

// export const getCounterId = (state: AppState): string => {
//     return state.countersPage.countersList.
// }

export const getCurrentValuesSum = (state: AppState): number => {
    return state.countersPage.countersList.reduce(function (sum: number, item: ICounter) {
        return sum + item.currentValue
    }, 0)
}

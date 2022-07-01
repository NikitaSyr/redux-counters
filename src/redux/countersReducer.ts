import {ICounter} from "../types/types";
import {AppState} from "./reduxStore";

const ADD_COUNTER = "redux-counters/counters/ADD_COUNTER";
const DELETE_COUNTER = "redux-counters/counters/DELETE_COUNTER";
const INCREASE_VALUE_BY_COUNTER_ID = "redux-counters/counters/INCREASE_VALUE_BY_COUNTER_ID";
const DECREASE_VALUE_BY_COUNTER_ID = "redux-counters/counters/DECREASE_VALUE_BY_COUNTER_ID";

interface IState {
    countersList: ICounter[],
    totalUniqCountersCount: number
}

const initialState: IState = {
    countersList: [],
    totalUniqCountersCount: 0
};

export const countersReducer = (state = initialState, action: any): IState => {
    switch (action.type) {
        case ADD_COUNTER: {
            const valuesSum = state.countersList.reduce(function(sum: number, item: ICounter) {
                return sum + item.currentValue
            }, 0)
            const newCounter = {
                counterId: (state.totalUniqCountersCount + 1).toString(),
                currentValue: valuesSum
            }
            return {
                ...state,
                totalUniqCountersCount: state.totalUniqCountersCount + 1,
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
    addCounterAC: (): any => ({
        type: ADD_COUNTER,
    }),
    deleteCounterAC: (counterId: string): any => ({
        type: DELETE_COUNTER,
        payload: {counterId}
    }),
    increaseCounterValueAC: (counterId: string): any => ({
        type: INCREASE_VALUE_BY_COUNTER_ID,
        payload: {counterId}
    }),
    decreaseCounterValueAC: (counterId: string): any => ({
        type: DECREASE_VALUE_BY_COUNTER_ID,
        payload: {counterId}
    })
};

export const getCountersList = (state: AppState): ICounter[] => {
    return state.countersPage.countersList
}

export const getCurrentValuesSum = (state: AppState): number => {
    const valuesSum = state.countersPage.countersList.reduce(function(sum: number, item: ICounter) {
        return sum + item.currentValue
    }, 0)
    return valuesSum
}
import {
    ADD_COUNTER, AUTOMATIC_INCREASE_VALUE_BY_COUNTER_ID,
    DECREASE_VALUE_BY_COUNTER_ID,
    DELETE_COUNTER,
    INCREASE_VALUE_BY_COUNTER_ID
} from "../redux/countersReducer";

export interface ICounter {
    counterId: string
    currentValue: number
    automaticIncrementFlag: boolean
}

export interface CounterIdPayload {
    counterId: string
}

export interface AddCounter{
    type: typeof ADD_COUNTER
}

export interface DeleteCounter{
    type: typeof DELETE_COUNTER,
    payload: CounterIdPayload
}

export interface IncreaseCounterValue{
    type: typeof INCREASE_VALUE_BY_COUNTER_ID,
    payload: CounterIdPayload
}

export interface DecreaseCounterValue{
    type: typeof DECREASE_VALUE_BY_COUNTER_ID,
    payload: CounterIdPayload
}

export interface AutomaticIncreaseCounterValue{
    type: typeof AUTOMATIC_INCREASE_VALUE_BY_COUNTER_ID,
    payload: CounterIdPayload
}

import React from "react";
import {useDispatch} from "react-redux";
import {actions} from "../../../redux/countersReducer";

type PropsType = {
    currentValue: number
    counterId: string
    isFourth: boolean
}

export const CounterItem: React.FC<PropsType> = ({currentValue, counterId, isFourth}) => {
    const dispatch = useDispatch();

    const increaseCounterValue = () => {
        dispatch(actions.increaseCounterValueAC(counterId));
    };

    const decreaseCounterValue = () => {
        dispatch(actions.decreaseCounterValueAC(counterId));
    };

    const deleteCounter = () => {
        dispatch(actions.deleteCounterAC(counterId));
    };


    return (
        <>
            {!isFourth && <button onClick={increaseCounterValue}>+</button>}
            {!isFourth && <button onClick={decreaseCounterValue}>-</button>}
            <button onClick={deleteCounter}>Del</button>
            {currentValue}
        </>
    )
}
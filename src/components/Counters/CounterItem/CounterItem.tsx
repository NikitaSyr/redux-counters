import React from "react";
import {useDispatch} from "react-redux";
import {actions} from "../../../redux/countersReducer";

type PropsType = {
    currentValue: number
    counterId: string
}

export const CounterItem: React.FC<PropsType> = ({currentValue, counterId}) => {
    const dispatch = useDispatch();

    const increaseCounterValue = () => {
        dispatch(actions.increaseCounterValueAC(counterId));
    };

    const decreaseCounterValue = () => {
        dispatch(actions.decreaseCounterValueAC(counterId));
    };

    const deleteCounter = () => {
        dispatch(actions.deleteCounterAC(counterId))
    }


    return (
        <>
            <button onClick={increaseCounterValue}>+</button>
            <button onClick={decreaseCounterValue}>-</button>
            <button onClick={deleteCounter}>Del</button>
            {currentValue}
        </>
    )
}
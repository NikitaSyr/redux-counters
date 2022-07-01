import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {actions} from "../../../redux/countersReducer";

type PropsType = {
    currentValue: number
    counterId: string
    automaticIncrementFlag: boolean
}

export const CounterItem: React.FC<PropsType> = ({currentValue, counterId, automaticIncrementFlag}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.automaticIncreaseCounterValueAC(counterId))
    })

    const increaseCounterValue = () => {
        dispatch(actions.increaseCounterValueAC(counterId));
    };

    const decreaseCounterValue = () => {
        dispatch(actions.decreaseCounterValueAC(counterId));
    };

    const deleteCounter = () => {
        dispatch(actions.deleteCounterAC(counterId));
    };

    // const fur = () => {
    //     dispatch(actions.automaticIncreaseCounterValueAC(counterId))
    // }

    return (
        <>
            {!automaticIncrementFlag && <button onClick={increaseCounterValue}>+</button>}
            {!automaticIncrementFlag && <button onClick={decreaseCounterValue}>-</button>}
            <button onClick={deleteCounter}>Del</button>
            {/*<button onClick={fur}>Fur</button>*/}
            {currentValue}
        </>
    )
}
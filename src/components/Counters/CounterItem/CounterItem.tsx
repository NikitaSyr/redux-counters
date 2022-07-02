import React from "react";
import {useDispatch} from "react-redux";
import {actions} from "../../../redux/countersReducer";
import {Button, Card} from "antd";
import s from "./CounterItem.module.css"

interface IProps {
    currentValue: number
    counterId: string
    automaticIncrementFlag: boolean
}

const CounterItem: React.FC<IProps> = ({currentValue, counterId, automaticIncrementFlag}) => {
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
    if (!currentValue) {
        currentValue = 0
    }

    return (
        <Card
            className={s.counterItem}
            size="small"
        >
            <p className={s.counterValue}>{currentValue}</p>
            {!automaticIncrementFlag &&
                <Button onClick={increaseCounterValue}
                        className={s.counterButton}
                >
                    +
                </Button>}
            {!automaticIncrementFlag &&
                <Button onClick={decreaseCounterValue}
                        className={s.counterButton}
                >
                    -
                </Button>}
            <Button onClick={deleteCounter}
                    className={s.counterButton}
            >
                Delete
            </Button>
        </Card>
    )
}

export default React.memo(CounterItem)
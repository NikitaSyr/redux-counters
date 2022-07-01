import {useDispatch, useSelector} from "react-redux";
import {actions, getCountersList, getCurrentValuesSum} from "../../redux/countersReducer";
import {CounterItem} from "./CounterItem/CounterItem";
import {useEffect, useState} from "react";

export const Counters = () => {
    const [touched, setTouched] = useState(false)
    const dispatch = useDispatch();
    const countersList = useSelector(getCountersList);
    const sum = useSelector(getCurrentValuesSum);

    // useEffect(() => {
    //     dispatch(actions.automaticIncreaseCounterValueAC())
    // })

    const addCounter = () => {
        dispatch(actions.addCounterAC());
    };
    const automaticCounter = () => {
        if (!touched) {
            dispatch(actions.automaticIncreaseCounterValueAC())
        }
        setTouched(true)
    }

    const countersItemsList = countersList.map(item => (
        <CounterItem key={item.counterId} currentValue={item.currentValue} counterId={item.counterId} automaticIncrementFlag={item.automaticIncrementFlag}/>
    ));

    return (
        <div onClick={automaticCounter}>
            <button onClick={addCounter}>Жмак</button>
            <div>
                {countersItemsList}
            </div>
            <div>
                {sum}
            </div>
        </div>
    )
}
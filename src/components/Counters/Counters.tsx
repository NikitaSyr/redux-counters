import {useDispatch, useSelector} from "react-redux";
import {actions, getCountersList} from "../../redux/countersReducer";
import {CounterItem} from "./CounterItem/CounterItem";
import {Button} from "antd";
import s from "./Counters.module.css"

export const Counters = () => {
    const dispatch = useDispatch();
    const countersList = useSelector(getCountersList);

    const addCounter = () => {
        dispatch(actions.addCounterAC());
    };
    const automaticCounter = () => {
            dispatch(actions.automaticIncreaseCounterValueAC())
    }

    const countersItemsList = countersList.map(item => (
        <CounterItem key={item.counterId} currentValue={item.currentValue} counterId={item.counterId} automaticIncrementFlag={item.automaticIncrementFlag}/>
    ));

    return (
        <div onClick={automaticCounter}
             className={s.counters}
        >
            <Button onClick={addCounter}
            className={s.countersButton}
            >
                Add counter
            </Button>
            <div className={s.countersList}>
                {countersItemsList}
            </div>
        </div>
    )
}
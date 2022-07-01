import {useDispatch, useSelector} from "react-redux";
import {actions, getCountersList, getCurrentValuesSum} from "../../redux/countersReducer";
import {CounterItem} from "./CounterItem/CounterItem";

export const Counters = () => {
    const dispatch = useDispatch()
    const countersList = useSelector(getCountersList);
    const sum = useSelector(getCurrentValuesSum)
    // console.log(countersList)

    const addCounter = () => {
        dispatch(actions.addCounterAC())
    }



    const countersItemsList = countersList.map(item => (
        <CounterItem key={item.counterId} currentValue={item.currentValue} counterId={item.counterId}/>
    ));

    return (
        <div>
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
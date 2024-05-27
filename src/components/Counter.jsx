import {useDispatch, useSelector} from "react-redux";
import {decreament, increament} from "../store/features/counterSlice";
import {useState} from "react";

const Counter = () => {

    const {count} = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const [number, setNumber] = useState(1)
    return (
        <div>
            <p>count is : {count}</p>
            <input type="number" value={number} onChange={e => setNumber(e.target.value)}/><br/>
            <button onClick={() => {
                dispatch(increament(+number))
            }}>increament
            </button>
            <br/>
            <button onClick={() => {
                dispatch(decreament(+number))
            }}>decreament
            </button>
            <br/>
        </div>
    )
}
export default Counter
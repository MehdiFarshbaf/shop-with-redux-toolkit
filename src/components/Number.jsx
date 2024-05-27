import {useDispatch, useSelector} from "react-redux";
import {decreamentNumber, increamentNumber} from "../store/features/numberSlice";

const Number = () => {

    const {number} = useSelector(state => state.number)
    const dispatch = useDispatch()
    return (
        <div>
            <p>number is : {number}</p>
            <button onClick={() => dispatch(increamentNumber())}>Plus</button>
            <br/>
            <button onClick={() => dispatch(decreamentNumber())}>Min</button>
        </div>
    )
}
export default Number
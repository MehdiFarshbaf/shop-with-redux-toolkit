import {useDispatch, useSelector} from "react-redux";
import {counter, isInCart} from "../helper/functions";
import {FaMinus, FaPlus, FaTrash} from "react-icons/fa";
import {addToCart, decrease, increase, removeFromCart} from "../store/features/cartSlice";

const Buttons = ({product}) => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    return (
        <div className="w-full flex justify-center items-center relative mt-2 p-2">
            {counter(cart, product.id) === 1 &&
                <button
                    onClick={() => dispatch(removeFromCart(product))}
                    className="flex justify-center items-center bg-red-500 w-1/2 py-2 rounded-lg border border-black ">
                    <FaTrash size={15}/></button>
            }
            {counter(cart, product.id) > 0 &&
                <span
                    className="w-[40px] h-[40px] absolute rounded-full bg-yellow-500 border border-black flex justify-center items-center">{counter(cart, product.id)}</span>}
            {counter(cart, product.id) > 1 &&
                <button onClick={() => dispatch(decrease(product))}
                        className="flex justify-center items-center bg-orange-500 w-1/2 py-2 rounded-lg border border-black">
                    <FaMinus size={15}/></button>
            }
            {isInCart(cart, product.id) ?
                <button
                    onClick={() => dispatch(increase(product))}
                    className="flex justify-center items-center bg-green-500 w-1/2 py-2 rounded-lg border border-black">
                    <FaPlus size={16}/></button> :
                <button onClick={() => dispatch(addToCart(product))}
                        className="bg-green-500 w-1/2 py-2 rounded-lg border border-black">Add To Cart</button>
            }
        </div>
    )
}
export default Buttons
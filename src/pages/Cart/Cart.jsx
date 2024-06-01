import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import CartItem from "../../components/CartItem";

const Cart = () => {

    const {cart} = useSelector(state => state.cart)

    return (
        <div className="w-full min-h-screen">{
            cart.length ?
                <div className="flex items-center justify-center flex-col">
                    {cart.map(product => (
                        <CartItem product={product} key={product.id}/>
                    ))}
                </div> :
                <h1 className="text-3xl text-red-600 text-center my-10">Cart is empty
                    <Link to="/"
                          className="text-yellow-400 text-xl text-center my-4 border-b border-yellow-400">go
                        to shop</Link></h1>
        }</div>
    )
}
export default Cart
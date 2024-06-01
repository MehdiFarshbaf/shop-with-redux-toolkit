import Buttons from "./Buttons";

const CartItem = ({product}) => {
    return (
        <div className="w-full flex items-center justify-between border border-blue-500 rounded-xl my-4 p-5 gap-3">
            <img className="w-[240px] h-[240px] rounded-lg" src={product.image} alt=""/>
            <div className="w-full">
                <p className="text-yellow-500 text-xl text-justify rounded-xl p-3 my-3">
                    Title : <span className="text-blue-700">{product.title}</span>
                </p>
                <p className="text-yellow-500 text-xl text-justify rounded-xl p-3 my-3">
                    Category : <span className="text-blue-700">{product.category}</span>
                </p>
                <p className="text-yellow-500 text-xl text-justify rounded-xl p-3 my-3">
                    Price : <span className="text-blue-700">{product.price}</span> $
                </p>
            </div>
            <div className="w-full"><Buttons product={product}/></div>
        </div>
    )
}
export default CartItem
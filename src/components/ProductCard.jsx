import {Link} from "react-router-dom";
import Buttons from "./Buttons";

const ProductCard = ({product}) => {

    const {title, image, price, id, category} = product
    return (
        <div
            className="rounded-xl bg-gray-600 shadow-lg flex flex-col justify-between overflow-hidden">
            <img src={image} className="w-full h-64" alt=""/>
            <div className="my-2 px-3">
                <p className="mt-2">{title}</p>
                <p className="mt-2 text-black">
                    <span className="text-blue-700 font-semibold">Category :</span>{category}
                </p>
                <p className="mt-2 text-black">
                    <span className="text-blue-700 font-semibold">Price :</span>{price}
                </p>
                <Link to={`/product/${id}`}>show details</Link>
                <Buttons product={product}/>
            </div>
        </div>
    )
}
export default ProductCard
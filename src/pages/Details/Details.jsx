import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProduct} from "../../store/features/productSlice";
import Loading from "../../components/Loading";

const Details = () => {

    const {id} = useParams();
    const dispatch = useDispatch()
    const {loading, product} = useSelector(state => state.products)
    console.log(product)

    useEffect(() => {
        dispatch(fetchProduct(id))
    }, []);

    return (
        <div className="w-full min-h-screen px-2 my-4">
            {loading ? <Loading/> :
                <div className="w-full flex justify-between gap-5">
                    <div className="w-[65%] border border-blue-700 rounded-xl p-10">
                        <p className="text-yellow-400 text-xl text-justify border border-gray-500 rounded-xl p-3 my-3">
                            Title : <span className="text-blue-700">{product.title}</span>
                        </p>
                        <p className="text-yellow-400 text-xl text-justify border border-gray-500 rounded-xl p-3 my-3">
                            Category : <span className="text-blue-700">{product.category}</span>
                        </p>
                        <p className="text-yellow-400 text-xl text-justify border border-gray-500 rounded-xl p-3 my-3">
                            Description : <span className="text-blue-700">{product.description}</span>
                        </p>
                        <p className="text-yellow-400 text-xl text-justify border border-gray-500 rounded-xl p-3 my-3">
                            Price : <span className="text-blue-700">{product.price}</span>
                        </p>
                    </div>
                    <div className="w-[35%] rounded-xl overflow-hidden flex items-center">
                        <img src={product.image} className="w-full h-96 rounded-xl" alt=""/>
                    </div>
                </div>
            }
        </div>
    )
}
export default Details

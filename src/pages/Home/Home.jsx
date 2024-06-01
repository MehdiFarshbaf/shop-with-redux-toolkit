import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../../store/features/productSlice";
import Loading from "../../components/Loading";
import ProductCard from "../../components/ProductCard";

const Home = () => {

    const dispatch = useDispatch()
    const {products, loading, error} = useSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);

    return (
        <div className="w-full my-10">
            <h1 className="pb-4 text-center text-3xl text-blue-500 border-b-4 border-blue-700 font-extrabold">Products</h1>
            {loading && <Loading/>}
            {error && <h1 className="text-red-600 text-xl text-center mt-10 ">{error}</h1>}
            <div className="w-full grid grid-cols-4 gap-8 pt-5 px-2">
                {products.length && products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>

        </div>
    )
}
export default Home
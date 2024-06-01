import {Link} from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {LuFolderHeart} from "react-icons/lu";
import {useSelector} from "react-redux";

const Header = () => {

    const {count} = useSelector(state => state.cart)

    return (
        <header className="w-full p-3 bg-blue-950 rounded-lg mt-1">
            <ul className="flex items-center">
                <li className="mx-4"><Link to="/">Home</Link></li>
                <li className="mx-4 flex items-center justify-center gap-2 relative">
                    <Link to="/cart">
                        <AiOutlineShoppingCart size={25}/>
                        <span
                            className="w-[20px] h-[20px] text-sm rounded-full bg-red-600 border border-white flex items-start
                            justify-center absolute top-[-10px] right-[-10px]">{count}</span>
                    </Link>
                </li>
                <li className="mx-4 flex items-center justify-center gap-2 cursor-pointer">
                    <LuFolderHeart size={25} color="#fff"/>
                </li>
            </ul>
        </header>
    )
}
export default Header
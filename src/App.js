import Header from "./components/Header";
import Footer from "./components/Footes";
import {Route, Routes} from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Cart from "./pages/Cart/Cart";

const App = () => {
    return (
        <main>
            <Header/>
            <div className="flex justify-center items-center">
                <div className="container ">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/product/:id" element={<Details/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                    </Routes>
                </div>
            </div>
            <Footer/>
        </main>
    )
}

export default App
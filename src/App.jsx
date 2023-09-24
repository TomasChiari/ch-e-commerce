import { BrowserRouter, Routes, Route} from "react-router-dom";
import { React } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { CartContextProvider } from "./contexts/CartContext/CartContext.jsx";
import { Cart } from "./components/Cart/Cart.jsx"
import { Checkout } from "./components/Checkout/Checkout.jsx";
import "./app.css"


export const App = () => {
    return (
        <>
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        
                        <Route path="/" element={<ItemListContainer/>}/>

                        <Route path="/cart" element={<Cart />}/>

                        <Route path="/checkout" element={<Checkout />}/>

                        <Route path="/category/:id" element={<ItemListContainer/>}/>
                        
                        <Route path="/item/:id" element={<ItemDetailContainer/>}/>

                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
        </>
    );
}
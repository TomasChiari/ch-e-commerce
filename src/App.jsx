import { BrowserRouter, Routes, Route} from "react-router-dom";
import { React, createContext } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";

import "./app.css"

export const CartContext = createContext(0);

export const App = () => {
    return (
        <>
            <CartContext.Provider value={0}>
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        
                        <Route path="/" element={<ItemListContainer/>}/>

                        <Route path="/category/:id" element={<ItemListContainer/>}/>
                        
                        <Route path="/item/:id" element={<ItemDetailContainer/>}/>

                    </Routes>
                </BrowserRouter>
            </CartContext.Provider>
        </>
    );
}
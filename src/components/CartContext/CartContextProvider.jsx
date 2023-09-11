import { createContext, useState } from "react";


const CartContext = createContext;

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);


    const addToCart = (item, quantity) => {setCartList((prev) => [...prev, {...item,quantity}])};
    
    const deleteItem = (id) => {
        setCartList(
                cartList.filter(
                (item) => item.id !== id
            )
        )
    };
    
    const removeList = () => {setCartList([])};

    return (
        <>
            <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem}}>
                {children}
            </CartContext.Provider>
        </>
    )

}
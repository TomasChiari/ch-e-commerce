import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);


    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCart = cartList.map(prod => {
                if (prod.id === item.id)
                    return {...item, quantity: prod.quantity + quantity}
                else return prod
            })

            setCartList(newCart)
        }
        else {
            setCartList((prev) => [...prev, {...item, quantity}])
        }
    };
    
    const deleteItem = (id) => {
        setCartList(
                cartList.filter(
                (item) => item.id !== id
            )
        )
    };
    
    const removeList = () => {setCartList([])};

    const isInCart = id => cartList.some(item => item.id === id);

    const totalItems = cartList.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);

    const totalPrice = cartList.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), 0);


    return (
        <>
            <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem, isInCart, totalItems, totalPrice}}>
                {children}
            </CartContext.Provider>
        </>
    )

}
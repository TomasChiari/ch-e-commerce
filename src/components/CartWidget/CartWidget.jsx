import { useContext } from "react";
import Cart from "../../assets/images/shopping-cart.png"
import { CartContext } from "../../contexts/CartContext/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {

    const { totalItems} = useContext(CartContext)

    return (
        <>
            <Link to="/cart">
            <img src={Cart} alt="cart logo"/>
            <span>{totalItems}</span>
            </Link>
        </>
    );
}

export default CartWidget;
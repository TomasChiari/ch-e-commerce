import { useContext} from "react"
import ItemCount from "../ItemCount/ItemCount.jsx"
import "./ItemDetail.css"
import { CartContext } from "../../contexts/CartContext/CartContext.jsx";


const ItemDetail = ({product}) => {

    const { cartList, addToCart } = useContext(CartContext);

    const itemInCart = cartList.filter(item => item.name === product.name )
    const availableStock =  itemInCart == 0 ? product.stock : product.stock - itemInCart[0].quantity

    const onAdd = count => addToCart(product, count)

    return(
        <>
            <div className="cardDetail">
                <div className="bannerDetail">
                    <h2 className="nameDetail">{product.name}</h2>
                </div>
                <div className="descriptionDetail">
                    <span className="genderDetail">Genero:{product.gender}</span>
                    <span className="sizeDetail">Talle:{product.size}</span>
                </div>
                <div className="ShoppingDetail">
                    <span className="priceDetail">${product.price}</span>
                    <ItemCount initial={1} stock={availableStock} onAdd={onAdd}/>

                </div>
            </div>
        </>
    )
}

export default ItemDetail;
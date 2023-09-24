import { useContext} from "react"
import ItemCount from "../ItemCount/ItemCount.jsx"
import "./ItemDetail.css"
import { CartContext } from "../../contexts/CartContext/CartContext.jsx";


const ItemDetail = ({product}) => {

    const { addToCart } = useContext(CartContext);

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
                    <span className="priceDetail"></span>
                    {/* {!items?<ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>:<span className="added">Producto Añadido</span>} */}
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>

                </div>
            </div>
        </>
    )
}

export default ItemDetail;
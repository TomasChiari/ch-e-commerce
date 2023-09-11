import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount.jsx"
import "./ItemDetail.css"

const ItemDetail = ({product}) => {

    const [count, setCount] = useState(0);

    const onAdd = (count) => {
        setCount(count);
        setTimeout(() => {console.log(count)}, 1000)
    }

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
                    {!count?<ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>:<span className="added">Producto Añadido</span>}

                </div>
            </div>
        </>
    )
}

export default ItemDetail;
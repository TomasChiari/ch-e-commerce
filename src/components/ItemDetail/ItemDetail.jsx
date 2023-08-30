import ItemCount from "../ItemCount/ItemCount.jsx"
import "./ItemDetail.css"

const ItemDetail = ({product}) => {
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
                    <ItemCount initial={1} stock={product.stock}/>

                </div>
            </div>
        </>
    )
}

export default ItemDetail;
import "./Item.css"

const Item = ({product}) => {
    return(
        <>
            <div className="card">
                <div className="banner">
                    <h2 className="name">{product.name}</h2>
                </div>
                <div className="description">
                    <span className="gender">Genero:{product.gender}</span>
                    <span className="size">Talle:{product.size}</span>
                </div>
                <div className="shopping">
                    <span className="price">{`$${product.price}`}</span>
                    <button className="detail">Ver Detalle</button>
                    <span className="availableStock">{`Stock Disponible: ${product.stock}`}</span>
                </div>
            </div>
        </>
    )
}

export default Item;
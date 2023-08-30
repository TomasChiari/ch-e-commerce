import { useState, useEffect } from "react";
import "../ItemDetail/ItemDetail.jsx"
import data from "../../data/stock_data.json";
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail.jsx";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);

    useEffect(() => {
        const promise = new Promise((res) => {
            setTimeout(() => res(data[3]), 2000)
        })

        promise.then(dat => setProduct(dat))
    }, [])

    return (
        <div className="main-container">
            
            {product?<ItemDetail product={product}/>:<h1>Loading...</h1>}
            
        </div>
    );
}

export default ItemDetailContainer;
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../ItemDetail/ItemDetail.jsx"
import data from "../../data/stock_data.json";
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail.jsx";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const promise = new Promise((res) => {
            setTimeout(() => {
                const prodId = data.find((product) => product.id === id);
                res(prodId);
            }, 2000)
        })

        promise.then(dat => setProduct(dat))
    }, [id])

    return (
        <div className="main-container">
            
            {product?<ItemDetail product={product}/>:<h1>Loading...</h1>}
            
        </div>
    );
}

export default ItemDetailContainer;
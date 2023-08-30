import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import data from "../../data/stock_data.json";
import "./ItemListContainer.css"


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        const promise = new Promise((res) => {
            setTimeout(() => res(data), 2000)
        })

        promise.then(dat => {
            if (!id) {
                setProducts(dat)
            }
            else {
                const filter = data.filter(
                    (product) => product.category === id
                )
                setProducts(filter)
            }
        })
    }, [])

    return (
        <div className="main-container">
            {products.length !== 0?<ItemList products = {products}/>:<h1>Loading...</h1>}
        </div>
    );
}

export default ItemListContainer;
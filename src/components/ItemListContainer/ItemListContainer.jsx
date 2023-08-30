import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import data from "../../data/stock_data.json";


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const promise = new Promise((res) => {
            setTimeout(() => res(data), 2000)
        })

        promise.then(dat => setProducts(dat))
    }, [])

    console.log(products)

    return (
        <>
            <ItemList products = {products}/>
            {/* {products.map(product => 
                <div key={product.id}>
                    <h1>{product.name}</h1>
                </div>
            )} */}
        </>
    );
}

export default ItemListContainer;
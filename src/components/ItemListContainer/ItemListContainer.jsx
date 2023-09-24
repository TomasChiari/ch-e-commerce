import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { getFirestore, getDocs, collection, query, where} from 'firebase/firestore'

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const {id} = useParams();

    useEffect(()=> {
        const db = getFirestore()

        const refCollection = id ? query(collection(db, "ItemCollection"), where("category", "==", id)) : collection(db, "ItemCollection")

        getDocs(refCollection)
            .then(resp => {
                if (resp.size === 0) {
                    console.log('error, sin resultados')
                }
                else {
                    setProducts(resp.docs.map(doc => {return { id: doc.id, ...doc.data()}}))
                }
            })        
    }, [id])

    return (
        <div className="main-container">
            {products.length !== 0?<ItemList products = {products}/>:<h1>Loading...</h1>}
        </div>
    );
}

export default ItemListContainer;
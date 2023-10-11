import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../ItemDetail/ItemDetail.jsx"
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { getFirestore, getDoc, doc} from 'firebase/firestore'



const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);

    const { id } = useParams();

    useEffect(()=> {
        const db = getFirestore()

        const refDoc = doc(db, "ItemCollection", id)


        getDoc(refDoc)
            .then(resp => {
                setProduct({ id: resp.id, ...resp.data() })
            })       
    }, [id])

    return (
        <div className="main-container">
            
            {product?<ItemDetail product={product}/>:<h1>Loading...</h1>}
            
        </div>
    );
}

export default ItemDetailContainer;
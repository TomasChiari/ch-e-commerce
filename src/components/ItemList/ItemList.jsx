import Item from "../Item/Item.jsx";

const ItemList = ({products}) => {
    
    return (
        products.map((product) => <Item key={product.id} product={product}/>)
        // products.map((product) => <div key={product.id}><h1>{product.name}</h1></div>)
    )
}
export default ItemList; 
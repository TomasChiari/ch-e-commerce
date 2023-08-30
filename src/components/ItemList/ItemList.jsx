import Item from "../Item/Item.jsx";

const ItemList = ({products}) => {
    
    return (
        products.map((product) => <Item key={product.id} product={product}/>)
    )
}
export default ItemList; 
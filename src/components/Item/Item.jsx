const Item = ({product}) => {
    return(
        <>
            <div className="card">
                <h2>{product.name}</h2>
            </div>
        </>
    )
}

export default Item;
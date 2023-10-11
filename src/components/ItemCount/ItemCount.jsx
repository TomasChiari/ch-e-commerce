import { useState } from "react";
import "./ItemCount.css";


const ItemCount = ({initial, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial);

    
    const handleSubtractCounter = () => {
        if (counter > 1) {
            setCounter((prev) => prev - 1)
        }
    }

    const handleAddCounter = () => {
        if (counter < stock) {
            setCounter((prev) => prev + 1)
        }
    }

    const addCart = () => {
        onAdd(counter)
        setCounter(1)
    }

    return(
        <>

            {stock == 0 ?
            <span className="container">Sin Stock</span>:
            <div className="container">
                <div className="counter">
                    <button className="counter-button" onClick={handleSubtractCounter}>-</button>
                    <span className="counter-value">{counter}</span>
                    <button className="counter-button" onClick={handleAddCounter}>+</button>
                </div>

                <div className="add">
                    <button className="add-button" onClick={() => addCart()}>Añadir</button>   
                </div>
            </div>}
        </>
    )
}

export default ItemCount
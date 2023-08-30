import { useState } from "react";
import "./ItemCount.css";


const ItemCount = ({initial, stock}) => {

    const [counter, setCounter] = useState(initial);

    
    const handleSubtractCounter = () => {
        if (counter > 1) {
            setCounter((prev) => prev - 1)
        }
    }

    const handleAddCounter = (stockLimit) => {
        if (counter < stock) {
            setCounter((prev) => prev + 1)
        }
    }

    return(
        <>
            <div className="container">
                <div className="counter">
                    <button className="counter-button" onClick={handleSubtractCounter}>-</button>
                    <span className="counter-value">{counter}</span>
                    <button className="counter-button" onClick={handleAddCounter}>+</button>
                </div>

                <div className="add">
                    <button className="add-button">Añadir</button>   
                </div>
            </div>
        </>
    )
}

export default ItemCount
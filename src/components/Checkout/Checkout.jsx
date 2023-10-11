import { useState, useContext } from "react"
import { CartContext } from "../../contexts/CartContext/CartContext.jsx"
import "./Checkout.css"
import { addDoc, collection, getFirestore } from "firebase/firestore";


export const Checkout = () => {

    const { cartList, totalPrice, removeList } = useContext(CartContext);

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const handleInput = (e) => {
        e.preventDefault()
        setFormValues(prev => ({
            ...prev,
            [e.target.name]: e.target.value,

        }))
    }

    const generateOrder = () => {
        const order = {

            buyer: formValues,
            cartList,
            total: totalPrice

        }

        const db = getFirestore()

        const orderColection = collection(db, "orders")

        addDoc(orderColection, order).then(({id}) => {
                if (id) {
                    setFormValues({
                        name: "",
                        email: "",
                        phone: ""
                    })
                    removeList()
                    alert("Felicidades ppr su compra!! N* de Orden: " + id)

                }
            })
    }


    return(
        <div className="cont">
            <form>
                <h1>Ingrese sus Datos</h1>
                <input type="text" name="name" id="name" placeholder="Nombre" value={formValues.name} onChange={handleInput}/>
                <input type="email" name="email" id="email" placeholder="Email" value={formValues.email} onChange={handleInput}/>
                <input type="text" name="phone" id="phone" placeholder="Numero de telefono" value={formValues.phone} onChange={handleInput}/>
            </form>
            <button className="orderButton" onClick={generateOrder} > COMPRAR </button>

        </div>
    )
}
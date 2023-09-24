import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext/CartContext"
import { Link } from "react-router-dom"
import Table from 'react-bootstrap/Table';
import "./Cart.css"


export const Cart = () => {
    const {cartList, removeList, deleteItem, totalItems, totalPrice} = useContext(CartContext)

    return (
        <div className="cartContainer">
            <h1 className="tittle">Cart</h1>
            {cartList.length === 0?
            <div>No hay prendas en el carrito. vuelva a la <Link to="/">Tienda</Link></div>: 
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartList.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td><button onClick={() => {deleteItem(item.id)}}>Quitar</button></td>
                        </tr>
                    ))}
                    <tr>Total a pagar</tr>
                    <tr>totalPrice</tr>
                    <tr><Link to='/Checkout'>Terminar compra</Link></tr>
                </tbody>
            </Table>
            }
        </div>
    )
}
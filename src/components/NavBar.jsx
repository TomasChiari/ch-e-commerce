import CartWidget from "./CartWidget.jsx";
import "./NavBar.css"

const NavBar = () => {
    return (
        <header>
            <nav>
                <section>
                    <h2>PolimeriWolf</h2>
                    <a href="#">Nosotros</a>
                    <a href="#">Contactos</a>
                    <a href="#">Store</a>
                </section>
                <section>
                    <CartWidget/>
                </section>
            </nav>
        </header>
    );
}

export default NavBar;
import CartWidget from "../CartWidget/CartWidget.jsx";
import "./NavBar.css"
import Logo from "../../assets/images/logo.png"

const NavBar = () => {
    return (
        <header>
            <nav>
                <section className="brand">
                    <img className="brand-logo" src={Logo} alt="logo" />
                    <span className="brand-name">RoboCloth</span>
                </section>
                <section className="pages">
                </section>
                <section className="cart">
                    <CartWidget/>
                </section>
            </nav>
        </header>
    );
}

export default NavBar;
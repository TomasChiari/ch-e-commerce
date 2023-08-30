import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemCount from "./components/ItemCount/ItemCount.jsx";

import "./app.css"


export const App = () => {
    return (
        <>
            <NavBar/>
            <ItemListContainer/>
        </>
    );
}
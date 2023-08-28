import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

import "./app.css"

export const App = () => {
    return (
        <>
            <NavBar/>
            <ItemListContainer greeting="Item 1"/>
            <ItemListContainer greeting="Item 2"/>
            <ItemListContainer greeting="Item 3"/>
        </>
    );
}
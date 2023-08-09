import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer";

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
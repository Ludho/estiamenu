import MenuComponent from "../components/Menu/MenuComponent";
import ProductList from "../components/Menu/ProductList";




function Menu() {


    return ( 
    <>
    <div className="container bg-white">
        
        <ProductList></ProductList>
        <MenuComponent></MenuComponent> 
    </div> 
    </>
);
}

export default Menu;
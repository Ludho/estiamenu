import MenuBar from "./MenuBar";
import MenuList from "./MenuList";

function MenuComponent() {
    return (<>
        <div className="border rounded">
            <MenuBar></MenuBar>
            <MenuList></MenuList>
        </div>
    </>);
}

export default MenuComponent;
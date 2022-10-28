import MenuBarButton from "./MenuBarButton";

function MenuBar() {
    return (<>
        <div className="m-3 d-flex rounded border">
            <MenuBarButton id="1" name="Boisson" callBack={(id: String) => { alert("click" + id) }}></MenuBarButton>
            <MenuBarButton id="2" name="Dessert" callBack={(id: String) => { alert("click" + id) }}></MenuBarButton>
            <MenuBarButton id="3" name="Petite Faim" callBack={(id: String) => { alert("click" + id) }}></MenuBarButton>

        </div>
    </>);
}

export default MenuBar;
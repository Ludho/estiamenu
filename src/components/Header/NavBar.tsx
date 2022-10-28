import NavItem from "./NavItem";
import NavIcon from "./NavIcon";



const NavBar = () => {
    return (
        <div>
            <ul className="nav justify-content-center">
                <NavItem name="Menu" route=""></NavItem>
                <NavItem name="Horaire" route="timetable"></NavItem>
                <NavItem name="Payer" route="bill"></NavItem>
                <NavItem name="Appeler serveur" route="call"></NavItem>
                <NavIcon route="cart"></NavIcon>
            </ul>
        </div>
    );
}

export default NavBar;
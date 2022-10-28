import { Link } from "react-router-dom";

interface Props {
    name: String;
    route: String;
}

function NavItem({ name,route }: Props) {
    return (
        <Link to={'/'+route}>
            <li className="nav-item">
                <span className=" mx-4 text-black h4 text-decoration-none text-dark">{name}</span>
            </li>
        </Link>
    );
}

export default NavItem;
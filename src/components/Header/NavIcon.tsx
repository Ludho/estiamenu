import { ReactComponent as CartSvg } from '../../assets/cart.svg';
import { CartCountContext } from '../utils/Context';
import React, { useContext } from "react";
import { Link } from 'react-router-dom';

interface Props {
    route: String;
}

function NavIcon({route}:Props) {
    const count = useContext(CartCountContext).count;

    return (
        <li className="nav-item text-decoration-none" >
            <Link to={'/'+route}>
                <CartSvg className="svg" style={{width:"1em",height:"1em"}}></CartSvg>
                {count}
            </Link>
        </li>
    );
}

export default NavIcon;
import { Product } from "../../utils";
import { BsCartPlus } from 'react-icons/bs';
import { useContext } from "react";
import { CartCountContext } from "../utils/Context";
import styled from 'styled-components'

interface Props {
    product: Product;
}

function ProductItem({product}: Props) {
    const callback = useContext(CartCountContext).callback;

    return ( <>
    <div className="mx-4 my-4">
    <div className="border rounded shadow svg" style={{position: 'relative'}}>
        <BsCartPlus onClick={callback?()=>{callback(product)}:()=>{}} className="svg" style={{position:"absolute", top:"1em", right:"1em"}}  ></BsCartPlus>
        <img alt={product.name as string} className="img-fluid" style={{width:"290px", aspectRatio:1}}  src={product.img}></img>
        <strong><p className="p-3 m-0">{product.name}</p></strong>
        <P className="m-0 p-1 text-end">{`${product.price} €`}</P>
    </div>
    </div>
    
    </> );
}

const P = styled.p`
    position:"absolute";
    bottom:"1em";
`


export default ProductItem;
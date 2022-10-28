import { useContext } from "react";
import { CartCountContext } from "../components/utils/Context";
import { Product } from "../utils";

function Cart() {

    const map = useContext(CartCountContext).map;
    
    const getRows = ()=>{
        let row: JSX.Element[] = [];
        map.forEach((value: Number, key: String) => {
            let product:Product = JSON.parse(key as string);
            row.push(
                <>
                <div className="d-flex">
                    <img alt={product.name as string} style={{width:"100px",height:"100px"}} className="img-fluid" src={product.img}></img>
                    <p>{`Count : ${value}`} </p>
                </div>
                </>
            );
        });
        return row;
    }

    return ( <>
    <div className="container bg-white">
        <h1>PANIER</h1>
        {getRows()}
    </div> 
    </> );
}

export default Cart;
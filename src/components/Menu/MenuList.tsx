import { Product } from "../../utils";
import ProductItem from "./ProductElement";

function MenuList() {

    let arr:Product[] = [{ route: "1", name: "1", img: "./default-placeholder.webp" ,price:100},
    { route: "2", name: "rice", img: "https://www.budgetbytes.com/wp-content/uploads/2022/04/How-to-Cook-Rice-bowl.jpg" ,price:100},
    { route: "3", name: "monkee", img: "https://i1.sndcdn.com/avatars-vhDn3DoTNiK6AMuI-zOpnsA-t240x240.jpg" ,price:100},
    { route: "4", name: "Korean Fried Chicken", img: "https://christieathome.com/wp-content/uploads/2020/10/Facetune_06-10-2020-15-37-58-scaled.jpg" ,price:100},
    { route: "5", name: "Sloth", img: "https://i.pinimg.com/originals/04/a3/16/04a3160e61e55a4bd54c56d850321b78.jpg" ,price:100}];

    
    return ( <>
    <div className="row">
        {arr.map((product) => {
                return (
                    <div className="col-3">
                        <ProductItem product={product}></ProductItem>        
                    </div>
                )
        })}
    </div>
    </>);
}

export default MenuList;
import ProductItem from "./ProductElement";
import { useState } from "react";
import { Product } from "../../utils";


function ProductList() {


    const [index, setIndex] = useState(0);

    let arr:Product[] = [{ route: "1", name: "1", img: "./default-placeholder.webp" ,price:100},
    { route: "2", name: "rice", img: "https://www.budgetbytes.com/wp-content/uploads/2022/04/How-to-Cook-Rice-bowl.jpg" ,price:100},
    { route: "3", name: "monkee", img: "https://i1.sndcdn.com/avatars-vhDn3DoTNiK6AMuI-zOpnsA-t240x240.jpg" ,price:100},
    { route: "4", name: "Korean Fried Chicken", img: "https://christieathome.com/wp-content/uploads/2020/10/Facetune_06-10-2020-15-37-58-scaled.jpg" ,price:100},
    { route: "5", name: "Sloth", img: "https://i.pinimg.com/originals/04/a3/16/04a3160e61e55a4bd54c56d850321b78.jpg" ,price:100}];

    const getIndex= ()=>{
        if(index===0)return [arr.length-1,index,index+1];
        if(index===arr.length-1)return [arr.length-2,arr.length-1,0];
        return [index-1,index,index+1]
    }

    const getProducts = (index:number[]):Product[]=>{
        let products:Product[] =[];
        index.map((i)=>{
            products.push(arr[i]);
        })

        return products;
    }

    const addIndex = ()=>{
        if(index===arr.length-1) {setIndex(0);return}
        setIndex(index+1);
    }

    const subIndex = ()=>{
        if(index===0) {setIndex(arr.length-1);return}
        setIndex(index-1);
    }

    return (
        <>
        <div className="container d-flex align-items-center justify-content-center p-5 pt-0">
            <div ><p className="svg h4" ><strong onClick={()=>{subIndex()}}>{"<"}</strong></p></div>
        {getProducts(getIndex()).map((product) => 
                    <ProductItem product={product}></ProductItem>      
                )
            }
        <div><p className="svg h4" ><strong onClick={()=>{addIndex()}}>{">"}</strong></p></div>
        </div>
            
        </>
    );
}

export default ProductList;
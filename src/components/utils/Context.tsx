import React from "react";
import { Product } from "../../utils";

export const CartCountContext = React.createContext({count:0,callback:(product:Product)=>{},map:new Map<String,Number>()});
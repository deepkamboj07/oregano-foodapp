import React from "react";

const cartContext=React.createContext({
    item:[],
    totalAmount:0,
    addItem:(additem)=>{},
    removeItem:(removeitem_id)=>{}
});

export default cartContext;
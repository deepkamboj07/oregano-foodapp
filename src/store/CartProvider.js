import {React,useReducer} from "react";
import cartContext from "./cart-context";

const initializeData={
    item:[],
    totalAmount:0
}

const reducer=(state,action)=>{
    if(action.type==='Add_Item')
    {
        const updatedTotalAmount =state.totalAmount + action.value.price * action.value.quantity;

        const existingCartItemIndex = state.item.findIndex(
            (i) => i.id === action.value.id
        );
        const existingCartItem = state.item[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
                const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + action.value.quantity,
            };
            updatedItems = [...state.item];
            updatedItems[existingCartItemIndex] = updatedItem;
        } 
        else {
            updatedItems = state.item.concat(action.value);
        }

        return {
            item: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
}

const CartProvider=(props)=>{
    const[state,dispatch]=useReducer(reducer,initializeData)
    const addItemHandler=(item)=>{
        dispatch({type:'Add_Item', value:item});
    }
    const removeItemHandler=(id)=>{
        dispatch({type:'Remove_Item', value:id});
    }
    const cart={
        item:state.item,
        totalAmount:state.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler        
    };
    return <cartContext.Provider value={cart}>
        {props.children}
    </cartContext.Provider>
}

export default CartProvider;
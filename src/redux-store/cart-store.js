import { createSlice } from "@reduxjs/toolkit";

const obj={
    items:[],
    totalQuantity:0,
    totalPrice:0
}
const cartSlice=createSlice({
    name:'foodcart',
    initialState:obj,
    reducers:{
        replaceCart(state,action){
            if(action.payload?.items!==undefined)
                state.items=action.payload.items;
            if(action.payload?.totalQuantity!==undefined){
            state.totalQuantity=action.payload.totalQuantity;
            state.totalPrice=action.payload.totalPrice;
            }
        },
        addToCart(state,action)
        {
            const newItem=action.payload;
            const existing=state.items.find(item=> item.id===newItem.id);
            state.totalQuantity+=newItem.quantity;
            state.totalPrice+=(newItem.quantity * newItem.price);
            if(!existing)
            {
                state.items.push({id:newItem.id, price:newItem.price, quantity:newItem.quantity,totalPrice:newItem.price, name:newItem.name});
            }
            else{
                existing.quantity+=newItem.quantity;
                existing.totalPrice+=newItem.price
            }
        },
        removeItemFromCart(state,action){
            const id=action.payload;
            const existing=state.items.find((item)=>item.id===id);
            state.totalQuantity--;
            state.totalPrice-=existing.price;
            if(existing.quantity===1)
            {
                state.items=state.items.filter(item=> item.id!==id);
            }
            else
            {
                existing.quantity--;
                existing.totalPrice-=existing.price;
            }
        }
    }
});

export const cartAction= cartSlice.actions;
export default cartSlice;

import { createSlice } from "@reduxjs/toolkit";
const uiCartSlice=createSlice({
    name:'toogleCart',
    initialState:{showCart:false},
    reducers:{
        toggleCart(state){
            state.showCart=!state.showCart;
        }
    }
});

export const toogleCart=uiCartSlice.actions;
export default uiCartSlice;
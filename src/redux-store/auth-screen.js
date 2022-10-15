import { createSlice,configureStore } from "@reduxjs/toolkit";
import slice2 from "./userInfo";
import uiCartSlice from "./ui-cart-slice";
import cartSlice from "./cart-store";
import cartNotiSlice from "./cartNotification-slice";

const slice=createSlice({
    name:'auth',
    initialState:{tokenId:'',isLogedin:false,user_id:'',user_key:''},
    reducers:{
       logout(state)
       {
            state.tokenId='';
            state.isLogedin=false;
            state.user_id='';
       },
       login(state,action){
            state.tokenId=action.payload.tokenId;
            state.isLogedin=true;
            state.user_id=action.payload.user_id
       },
       addKey(state,action)
       {
        state.user_key=action.payload;
       }
    }
});

const store=configureStore({
    reducer:{auth:slice.reducer, userInfo:slice2.reducer, cartshow:uiCartSlice.reducer , 
        cartHandler:cartSlice.reducer,
        cartNotification:cartNotiSlice.reducer}
});

export const loginAction=slice.actions;
export default store;
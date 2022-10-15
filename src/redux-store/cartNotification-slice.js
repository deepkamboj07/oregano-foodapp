import { createSlice } from "@reduxjs/toolkit";

const cartNotiSlice=createSlice({
    name:"cartNotification",
    initialState:{show:false},
    reducers:{
        toogle(state){
            state.show=!state.show;
        }
    }
});

export const cartNotificationAction=cartNotiSlice.actions;
export default cartNotiSlice;
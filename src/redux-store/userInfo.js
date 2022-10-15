import { createSlice} from "@reduxjs/toolkit";

const slice2=createSlice({
    name:'userInfo',
    initialState:{
        name:'',
        email:'kk',
        latestAddress:'',
        cartItem:'',
    },
    reducers:{
        addinfo(state,action){
            state.name=action.payload.u_name;
            state.email=action.payload.u_email;
        },
        addAddress(state,action)
        {
            state.latestAddress=action.payload.address;
        }
    }
});


export const userDetail=slice2.actions;
export default slice2;
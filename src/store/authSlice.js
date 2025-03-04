import {createSlice} from "@reduxjs/toolkit"
import { jwtDecode } from "jwt-decode";

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        token: localStorage.getItem('token') || null,
        rule: localStorage.getItem('rule') || null
    },
    reducers:{
        setToken: (state, action) =>{
            state.token = action.payload;
            localStorage.setItem('token', action.payload)
            localStorage.setItem('rule', jwtDecode(action.payload).rule)
            console.log(jwtDecode(action.payload))
        },
        clearToken: (state) =>{
            state.token = null;
            localStorage.removeItem('token');
            localStorage.removeItem('rule');
        },
    }
});

export const {setToken, clearToken} = authSlice.actions;
export default authSlice.reducer;
import {createSlice} from "@reduxjs/toolkit"
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        token: Cookies.get('token') || null,
        role: Cookies.get('role') || null,
        count: 0
    },
    reducers:{
        setToken: (state, action) =>{
            const role = jwtDecode(action.payload).role;
            state.token = action.payload;
            state.role = role;
            Cookies.set('token', action.payload, {secure:true, expires: 2/24})
            Cookies.set("role", role, {secure:true, expires: 2/24})
        },
        clearToken: (state) =>{
            state.token = null;
            state.role = null;
            Cookies.remove('token');
            Cookies.remove('role');
            Cookies.remove('infoUser');
            Cookies.remove('JSESSIONID');
        }

    }
});

export const {setToken, clearToken} = authSlice.actions;
export default authSlice.reducer;
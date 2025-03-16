import {createSlice} from "@reduxjs/toolkit"
import { jwtDecode } from "jwt-decode";
import {byEmail} from "services/requestServices/employeeByEmail"


console.log(byEmail("biriba@gmail.com"))


const authSlice = createSlice({
    name: 'auth',
    initialState:{
        token: localStorage.getItem('token') || null,
        role: localStorage.getItem('role') || null
    },
    reducers:{
        setToken: (state, action) =>{
            state.token = action.payload;
            state.role = jwtDecode(action.payload).role;
            localStorage.setItem('token', action.payload)
        },
        clearToken: (state) =>{
            state.token = null;
            state.role = null;
            localStorage.removeItem('token');
            localStorage.removeItem('role');
        },
    }
});

export const {setToken, clearToken} = authSlice.actions;
export default authSlice.reducer;
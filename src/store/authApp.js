import { jwtDecode } from "jwt-decode";
import {useDispatch, useSelector} from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import validSession from "services/requestServices/validSession";
import { clearToken } from "./authSlice";

const AuthApp = ({ allowdRoles }) =>{
    const token = useSelector(state => state.auth.token) || Cookies.get('token');
    const role = useSelector(state => state.auth.role) || Cookies.get('role');
    const location = useLocation();
    const [load, setLoad] = useState(null);
    const dispatch = useDispatch();


    useEffect(()=>{
        setTimeout(async()=>{
            await validSession().then((data) =>{
                return data
            })
            .catch(err =>{
                console.log(err)
            })
            setLoad(allowdRoles.includes(role))
        },"1000")
    },[allowdRoles, role])

    if(!token)
        return <Navigate to={"/"} state={{from: location}} replace />

    try{
        if(load === null)
            return <p> carregando...</p>

        return load ? <Outlet/> : <Navigate to={"/authErr"} />

    } catch(err){
        console.log(err)
    }
}

export default AuthApp;
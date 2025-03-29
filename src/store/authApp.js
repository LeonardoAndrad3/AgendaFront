import { jwtDecode } from "jwt-decode";
import {useSelector} from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const AuthApp = ({ allowdRoles }) =>{
    const token = useSelector(state => state.auth.token) || localStorage.getItem('token');
    const location = useLocation();
    const role = () => jwtDecode(token).role
    const [load, setLoad] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            setLoad(allowdRoles.includes(role()))
        }, "500")
    }, [])

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
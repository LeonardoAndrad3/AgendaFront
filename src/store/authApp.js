import { jwtDecode } from "jwt-decode";
import {useSelector} from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthApp = ({ allowdRoles }) =>{
    const token = useSelector(state => state.auth.token) || localStorage.getItem('token');
    const location = useLocation();
    const role = () => jwtDecode(token).role
    
    if(!token)
        return <Navigate to={"/"} state={{from: location}} replace />

    try{
        const getRule = role; 
        return allowdRoles.includes(getRule()) ? <Outlet/> : <Navigate to={"/authErr"} />
    } catch(err){
        console.log(err)
    }
}

export default AuthApp;
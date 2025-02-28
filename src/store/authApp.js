import {useSelector} from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthApp = () =>{
    
    const token = useSelector(state => state.auth.token) || localStorage.getItem('token');
    const location = useLocation();

    console.log(token)
    if(!token){
        return <Navigate to={"/login"} state={{from: location}} replace />
    }
    return <Outlet/>
}

export default AuthApp;
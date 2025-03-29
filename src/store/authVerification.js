import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthVerification = () =>{

    const token = useSelector(state => state.auth.token)

    const navigate = useNavigate() 

    useEffect(() => {
        if(token){
            const subsToken = jwtDecode(token)
            console.log(subsToken)
            const role = subsToken.role
            
            if(role.includes("EMPLOYEE"))
                return navigate("/emp")
            else if(role.includes("CLIENT"))
                return navigate("/client")
        }    
    },[token, navigate])

    return null;
}

export default AuthVerification
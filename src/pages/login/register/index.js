import { Link } from "react-router-dom";

import Form from "components/formSignUp"

export default function SignUp(){

    return(
        <>  
            <Link to={"/"}>home</Link>

            <h1>Register</h1>

            <Form/>       
        </>
    )    

}
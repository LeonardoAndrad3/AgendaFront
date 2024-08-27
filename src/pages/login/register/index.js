import { Link } from "react-router-dom";

export default function Register(){

    return(
        <>  

            <Link to={"/"}>home</Link>

            <h1>Register</h1>

            <form>

                <input type="text"></input>
                <input type="email"></input>
                <input type="password"></input>

                <button>next</button>
                <button>back</button>

            </form>         
        </>
    )    

}
import { Container, Form} from "./styled"
import Button from "components/buttomBack"
import {Login} from "auth/login";
import { useDispatch } from "react-redux";
import { setToken } from "store/authSlice";
import byEmail from "services/requestServices/employeeByEmail";
import clientByEmail from "services/requestServices/client/clientByEmail";
import { saveLocalStorage } from "store/saveLocalStarage";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export default function FormSignInComp(){
    const dispatch = useDispatch();

     const handleSubmit = (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const obj = Object.fromEntries(form.entries())        
        var dataLogin = JSON.stringify(obj);

        try{
            Login(dataLogin)
            .then((token) => {
                const role = jwtDecode(token).role;
                const email = JSON.parse(dataLogin).email
                let user;

                if(role.includes("EMPLOYEE"))
                    byEmail(email).then(({data}) =>{
                        user = JSON.stringify(data)      
                        Cookies.set("infoUser", user)
                    })
                else if(role.includes("CLIENT"))
                    clientByEmail(email).then(({data}) =>{
                        console.log(data)
                        user = JSON.stringify(data);     
                        Cookies.set("infoUser", user)
                    })
                
                    dispatch(setToken(token))
            })
            
            .catch(err =>{
                alert("Caracteres não válidos")
            })
        }
        catch(err){
            console.log("Erro ou falha, contate o profissional.")
        }
    }

    return(
        <Container>
            <Form 
                height={"350px"} 
                width={"350px"} 
                className={"formSingin"} 
                onSubmit={handleSubmit}
            >

                <input name="email" type="email" placeholder="@gmai.com" required/>
                <input name="password" type="password" placeholder="....." required/>

                <Button color_b={"#9E277D"} color_t={"white"} w={"50%"} h={"40px"} r={"8px"} value={"Entrar"} type="submit" valu>next</Button>
            </Form>
        </Container>
    )
}
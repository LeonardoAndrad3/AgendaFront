import { Container, Form} from "./styled"
import Button from "components/buttomBack"
import {Login} from "auth/login";
import { useDispatch } from "react-redux";
import { setToken } from "store/authSlice";
import byEmail from "services/requestServices/employeeByEmail";
import clientByEmail from "services/requestServices/client/clientByEmail";
import { saveLocalStorage } from "store/saveLocalStarage";
import { jwtDecode } from "jwt-decode";

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

                dispatch(setToken(token))

                if(role.includes("EMPLOYEE"))
                    byEmail(email).then(async ({data}) =>{
                        user = JSON.stringify(data)      
                        await saveLocalStorage("infoUser", user)
                    })
                else if(role.includes("CLIENT"))
                    clientByEmail(email).then(async ({data}) =>{
                        console.log(data)
                        user = JSON.stringify(data);     
                        await saveLocalStorage("infoUser", user)
                    })
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
import { Container, Form} from "./styled"
import { ButtonCustom } from "components/buttonBack/styled"

export default function FormSignInComp(){

    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        form.get("email");

    }

    return(
        <Container>
            <Form 
                height={"350px"} 
                width={"350px"} 
                className={"formSingin"} 
                onSubmit={handleSubmit}
            >

                <input name="email" type="email" placeholder="@gmai.com"/>
                <input name="password" type="password" placeholder="....."/>

                <ButtonCustom type="submit">next</ButtonCustom>
            </Form>
        </Container>
    )
}
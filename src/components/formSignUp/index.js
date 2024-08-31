import { ButtonCustom } from "components/buttonBack/styled";
import { Form} from "./styled";

export default function formSignUp(props){

    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
    }

    const employee = [
        "mariana",
        "ivana"
    ]

    const services = [
        "Corte de cabelo",
        "Luzes"
    ]

    return(
        <Form>

            <input type="text"></input>
            <input type="email"></input>
            <input type="password"></input>

            <button>next</button>
            <button>back</button>
            
        </Form>
    )
}
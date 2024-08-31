import { ButtonCustom } from "components/buttonBack/styled";
import { DataList, Form} from "./styled";

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
            <input list="employee" />
            <DataList id="employee">
              {  employee.map((e,i)=>{
                    return(
                        <option key={i} value={e}></option>
                    )
                })}
            </DataList>

            <input list="services" />
            <DataList id="services">
              {  services.map((e,i)=>{
                    return(
                        <option key={i} value={e}></option>
                    )
                })}
            </DataList>

            <input type="date"></input>
            <input type="time"></input>
            <input type="time"></input>
            
            <ButtonCustom type="submit">Register</ButtonCustom>

            
        </Form>
    )
}
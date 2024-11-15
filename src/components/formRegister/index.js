import { ButtonCustom } from "components/buttonBack/styled";
import React from "react";
import { DataList, Form} from "./styled";
import { registerService } from "services/requestServices/registerService";
import dataEmployees from "services/requestServices/employees";
import { useEffect, useState } from "react";
import { EmployeeList } from "domain/employee/EmployeeList";
import { ServiceList } from "domain/services/ServiceList";


export default function FormRegister(){

    const [employee, setEmployee] = useState([])
    const [services, setServices] = useState()

    const inputServices = document.getElementById("servicesList")
    const inputEmployee = document.getElementById("employeeList")

    useEffect(()=>{
        dataEmployees()
        .then(({data})=>{
            setEmployee(data)
        })
    },[]);

    function getServices(e){
        var test = (e.target.selectedOptions[0].value)
        setServices(employee[test])
    }

    const formElement = document.querySelector("formService")

    const handleSubmit = (e)=>{
        e.preventDefault();

        const form = new FormData(e.currentTarget)
        form.append("idEmployee", services.id)
        form.append("idClient", "4")
        const data = Object.fromEntries(form.entries())

        registerService(data)

        console.log(data);
    }

    return(
        <Form 
            method="POST"
            onSubmit={handleSubmit}
        >
            <select id="employeeList" onChange={getServices}>
                <option value="default" defaultChecked>-- Select employee --</option>
                {employee.map((e,i)=>{
                        return(
                            <option key={i} value={0}>{e.name}</option>
                        )
                    })}
            </select>

            <select name="work">
                <option values="0" defaultChecked>-- Select service --</option>      
                        {services !== null ?
                                <option key={services?.id} value={services?.work}>{services?.work}</option>
                            :
                            "null"
                        }  
            </select>
            <input type="date" name="date"></input>
            <input type="time" name="start"></input>

            <ButtonCustom type="submit">Register</ButtonCustom>
        </Form>
    )
}
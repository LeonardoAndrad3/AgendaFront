import React from "react"
import {InputAll} from "./styled"

export default function AllInput(props){
    return(
            <InputAll type={props.type} placeholder={props.placeholder}/>
    )
}
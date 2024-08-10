import React from "react";
import {Button} from "./styled.js"

export default function ButtonBack(props){

    return(
        <Button colorB={props.colorB} colorT={props.colorT} w={props.w} h={props.h}>
            {props.value}
        </Button>
    );
}
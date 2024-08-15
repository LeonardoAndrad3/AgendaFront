import React from "react";
import {ButtonCustom} from "./styled.js"

export default function Button(props){

    return(
        <ButtonCustom colorB={props.colorB} colorT={props.colorT} w={props.w} h={props.h}>
            {props.value}
        </ButtonCustom>
    );
}
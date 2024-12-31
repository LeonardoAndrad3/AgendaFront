import styled from "styled-components";
import { H1 } from "styles/Global/styled";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;   
    text-align:center;
`

const ContainerForm = styled.form`
    display: grid;
    grid-template-rows: repeat(8, auto) 14%;
    row-gap: .5em;
    padding: 0 15% 0 15%;
    width: 100%;

    input{
        height: 35px;
        width: auto;
        min-width: 0px;
        outline: none;
        border: none;
        padding-left: 1em;
        border-radius: 5px;
        border-bottom: solid 1px rgba(185, 0, 176, 0.31);
        box-shadow: 2px 4px 10px -4px rgba(0, 0, 0, 0.45);
    }
`

const ButtonRegister =  styled.button`

`

const H1Register = styled(H1)`
    font-size: 24px;
    text-align: center;
    align-self: end;
`


export{Container,ContainerForm,ButtonRegister,H1Register};
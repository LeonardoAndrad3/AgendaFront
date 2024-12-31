import styled from "styled-components";
import "./style.css"
import { Link } from "react-router-dom";


const Container = styled.div`

    display: flex;
    align-items: start;
    text-align: center;
    justify-content: end;
    flex-direction: column;

    height: 100vh;
    width: 100vw;
`;

const Title = styled.h1`


    color: var(--color-h1-agenda);


`

const SubTitle = styled.h1`

    color: #9E9E9E;

`

const Nagivation = styled.section`
    display: grid;
    height: 100%;
    width: 100%;
    border: solid 1px red;

    .link{ 
        display: flex;
        top: 10%;
        left: 2.5%;
        align-items: start;
        justify-content: start;
    }

`

const EmployeeList =  styled.ul`

    li{

    } 

    span{

    }
`




export{Container,Title,SubTitle,Nagivation, EmployeeList}
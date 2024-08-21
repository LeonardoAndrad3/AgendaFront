import styled from "styled-components";


const Container = styled.div`

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
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

const Nagivation = styled.article`

    display: flex;

    height: 100%;
    width: 100%;

`

const EmployeeList =  styled.ul`

    li{

    }

    span{

    }


`


export{Container,Title,SubTitle,Nagivation, EmployeeList}
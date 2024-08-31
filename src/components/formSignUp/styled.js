import styled from "styled-components";


const Container = styled.div`

`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2em;
    row-gap: 1em;

    input{
        border: none;
        outline: none;
        border-bottom: solid 1px black;
        transition: margin-left 100ms;
    }

    input:hover{
        margin-left: .5em;
        border-bottom: solid 1px black;
    }
`

export{Container, Form}
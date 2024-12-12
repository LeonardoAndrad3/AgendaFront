import styled from "styled-components";


const Container = styled.div`
    width: 100%;
`

const Form = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3em 0 2em 0;
    row-gap: 2em;
    
    input{
        border: none;
        outline: none;
        width: 80%;
        border-bottom: solid 1px black;
        transition: margin-left 100ms;
        padding-bottom: .5em;
        padding-left: 1em;
    }

    input:hover{
        margin-left: .5em;
        border-bottom: solid 1px black;
    }
`

export{Container, Form}
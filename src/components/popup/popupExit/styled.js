import styled from "styled-components";

const PopupComponent = styled.div`
    display: none;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    background-color: rgba(7, 7, 7, 0.62);
    color: white;
    justify-content: center;
    align-items: center;
`

const PopupContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 40%;
    background-color: rgba(204, 204, 204, 0.9);
    color: black;
    font-weight: 500;
    text-align: center;
    justify-content: center;
    border-radius: 8px;
    gap: 1em;

    button{
        display: inline-block;
        background-color: black;
        color: white;
        width: 50px;
        height: auto;
        align-self: center;
        border-radius: 5px;
    }
`


export{PopupContent, PopupComponent}
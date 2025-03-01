import styled from "styled-components";


const PopupComponent = styled.div`
    display: none;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: rgba(7, 7, 7, 0.62);
    color: white;
    justify-content: right;
`

const PopupContent = styled.div`
    width: 50%;
    height: 100%;
    background-color: rgb(165, 89, 184);
`


export{PopupContent, PopupComponent}
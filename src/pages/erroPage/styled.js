import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &&{
        color: black;
        font-size: 2rem;
    }

    h1{
        font-weight: 700;
        color: white;
        border: solid 2px wheat;
        background-color: black;
        padding: .5rem;
        border-radius: 8px;
    }

` 




export {Container};
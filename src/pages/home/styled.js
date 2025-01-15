import styled from "styled-components";

const ContainerMain = styled.main`

    display: flex;
    flex-direction: column;
    justify-content:start;
    align-items:center;
    text-align:center;

    width: 100vw;
    height: 100vh;
`

const DivPerfil = styled.section`
    display: grid;
    height: fit-content;
    width: 100%;

    grid-template-columns: max-content auto min-content;

    padding-top: 2em;

    div{
        grid-area: 1/1/3/3;
        display: grid;
        grid-template-columns: min-content max-content;
        align-items:center;

        div{
            grid-area: 1/1/3/2;
        }
    }

    button{
        grid-area: 1/3/3/3;
    }

    #work{

    }

    #name{

    }
`

const DivPainel = styled.section`

    display: grid;

    grid-template-columns: auto auto;
    grid-template-rows: min-content repeat(auto-fit, minmax(300px, 1fr));

    justify-items: center;
    align-items: center;

    width: 100%;
    height: 100%;

    h1{
        grid-area: 1 / 1 / 2 / 3;
    }

    button{
        border-radius: 10px;
        background-color: #D9D9D9;
        min-width: 100px;
        min-height: 60px;
        max-width: 150px;
        padding: .7em 0 .7em 0;

        width: 60%;

        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        gap: .5em;
    }

    #dash{
        grid-area: 4/1/5/3;
    }
`

const IconPerfil = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: rgb(78, 78, 78);
`




export {ContainerMain, DivPerfil, DivPainel, IconPerfil}
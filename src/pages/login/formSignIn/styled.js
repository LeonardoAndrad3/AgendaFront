import styled from "styled-components";

import { H1 } from "styles/Global/styled";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: start;
    padding-top: 30%;
    border: solid 1px red;
    row-gap: 1em;
`
const H1Login = styled(H1)`
    position: relative;
    width: 100%;
    padding-left: 10%;
`

export{Container, H1Login}
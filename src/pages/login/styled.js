import styled from "styled-components";

import { H1 } from "styles/Global/styled";

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
`
const H1Login = styled(H1)`
    position: relative;
    width: 100%;
`

const Logindiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 90%;
`

export{Container, H1Login, Logindiv}
import styled from "styled-components";

export const Button = styled.button`

    width: ${(props) => props.w};
    height: ${(props) => props.h};
    background-color: ${(props) => props.colorB};
    color: ${(props) => props.colorT};

    border: none;
    padding: .5rem;
`
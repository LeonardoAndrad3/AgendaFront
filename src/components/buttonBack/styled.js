import styled from "styled-components";

export const ButtonCustom = styled.button`

    width: ${(props) => props.$w};
    height: ${(props) => props.$h};
    background-color: ${(props) => props.$color_b};
    color: ${(props) => props.$color_t};

    border: none;
    padding: .5rem;
`
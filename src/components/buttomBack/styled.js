import styled from "styled-components";

export const ButtomCustom = styled.button`

    width: ${(props) => props.$w};
    height: ${(props) => props.$h};
    background-color: ${(props) => props.$color_b || 'transparent'};
    color: ${(props) => props.$color_t} ;
    border-radius: ${(props) => props.$r};

    border: none;
    padding: .5rem;
`
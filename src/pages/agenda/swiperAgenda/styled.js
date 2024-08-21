import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    width: 98%;
    height: 98%;

`

export const SwiperContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto 1fr auto;
    border-radius: .5em;
    height: auto;
    width: 100%;
    background-color: var(--backgroud-service-agenda);
    justify-content: center;
    align-items: center;
    padding: .5em .5em;
    box-sizing: border-box;


`

export const ServiceTag = styled.div`
    background-color: var(--tag-${(props) => props.employee});
    border-radius: 50%;
    display: inline-block;
    width: 40px;
    height: 40px;
    grid-area: 2/1/3/2; 
`

export const NameClient = styled.p`
    width: auto;
    height: auto;
    
    grid-area: 2/2/3/3; 
`

export const DateService = styled.div`

    display: grid;
    grid-area: 2/3/3/4; 

`

export const TimeHour = styled.span`



`
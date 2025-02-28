import { Container, Title, SubTitle, Nagivation, EmployeeList } from "./styled.js";
import SwiperAgenda from "./swiperAgenda";
import {H1} from "styles/Global/styled" 

const hideButton = (e) =>{
    const button = document.getElementById("buttonViewServices");
    button.parentNode.removeChild(button);
}

export default function Agenda(){

    return (
        <Container>
            <Nagivation>
                <section className="section_Title">           
                    
                    <H1>Agenda</H1>
                    
                    <SubTitle>Filter</SubTitle>

                </section>
            </Nagivation>   
            <SwiperAgenda/>
        </Container>
    );
}

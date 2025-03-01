import { ButtomCustom } from "components/buttomBack/styled"
import "./styled.css"
import { PopupContent, PopupComponent} from "./styled"
import PopoupExit from "./popupExit"
import { forwardRef, useRef } from "react"

const Popoup = forwardRef((props, ref) =>{

    const btnExit = useRef(null);
    const popup = useRef(null);
    const popupContet = useRef(null);

    const exit = (e) =>{ 
        if(btnExit)
            btnExit.current.style.display = "flex"
    }  

    const closePopup = (e) => {
        if(popupContet.current && !popupContet.current.contains(e.target) && !btnExit.current.contains(e.target))
            ref.current.style.display = "none";
    }

    return(
        <PopupComponent ref={ref} onMouseDown={closePopup}>
            <PopoupExit ref={btnExit}/>
            <PopupContent ref={popupContet}>
                <h3>Hi, Mariana</h3>
                <ButtomCustom onClick={exit}> exit </ButtomCustom>
            </PopupContent>
        </PopupComponent>
    )
})

export default Popoup
import { ButtomCustom } from "components/buttomBack/styled"
import "./styled.css"
import { PopupContent, PopupComponent} from "./styled"
import { clearToken, countNum} from "store/authSlice"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { forwardRef, useReducer, useRef } from "react"

const PopoupExit = forwardRef((props, ref) =>{

    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    const popupContet = useRef();

    const exit = () =>{ 
        dispatch(clearToken(token))
    }

    const closePopup = (e) => {
        if(popupContet.current && !popupContet.current.contains(e.target))
            ref.current.style.display = "none";
    }

    return(
        <PopupComponent ref={ref} onMouseDown={closePopup}>
            <PopupContent ref={popupContet}>
                <h3>Realmente deseja sair? </h3>
                <ButtomCustom onClick={exit}> sim </ButtomCustom>
            </PopupContent>
        </PopupComponent>
    )
})

export default PopoupExit
import { useDispatch } from "react-redux";
import { setToken } from "./authSlice";

export const useAuth = () => {
    const dispatch = useDispatch();

    const login = (token) =>{
        dispatch(setToken(token))
    };

    return {login}
}
import axios from "config/axios";

const validSession = async () => {
     return await axios.get("/auth",{withCredentials: true})
        .then((data) => {return data.status})
        .catch((err) => {return err})
}

export default validSession;
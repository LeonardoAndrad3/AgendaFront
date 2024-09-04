import axios from "config/axios";




const addServices = async() =>{

    return await axios.post(
        "/services/add"
    
    )



} 
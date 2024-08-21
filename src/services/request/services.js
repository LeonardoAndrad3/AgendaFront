import axios from "config/axios";

const getServices = async() =>{
    return await axios.get("/services")
        .then((response)=>{
            return response
        }) 
        .catch((err) =>{
            console.log("error")
        })   
}

export default getServices();
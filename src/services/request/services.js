import axios from "config/axios";

const GetServices = async() =>{
    return await axios.get("/services")
        .then((response)=>{
            return response
        }) 
        .catch((err) =>{
            console.log("error")
        })   
}

export default GetServices();
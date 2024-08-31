import axios from "config/axios";

//Create class for API auth ;

const login = async(data) =>{
    return await axios.post("/services")
        .then((response)=>{
            return response
        }) 
        .catch((err) =>{
            console.log("error")
        })   
}

export default login();
import axios from "config/axios";

async function getServices(n){
    return await axios.get(`/services/byId?page=${n}`)
        .then((response)=>{
            return response
        }) 
        .catch((err) =>{
            console.log("error")
        })   
}

async function getServiceAll(){
    return await axios.get(`/services/byId`,{
        withCredentials: true,
    })
        .then((response)=>{
            return(response)
        }) 
        .catch((err) =>{
            console.log("error")
        })   
}
 
export{getServiceAll,getServices};
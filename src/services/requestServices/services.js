import axios from "config/axios";

async function getServices(n){
    return await axios.get(`/services?page=${n}`)
        .then((response)=>{
            console.log(response.data)
            return response
        }) 
        .catch((err) =>{
            console.log("error")
        })   
}

async function getServiceAll(n){
    return await axios.get(`/services}`)
        .then((response)=>{
            console.log(response.data)
            return response
        }) 
        .catch((err) =>{
            console.log("error")
        })   
}


export default getServices;
export {getServiceAll}
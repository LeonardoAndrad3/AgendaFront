import axios from "config/axios";

async function getEmployees(params) {
    return await axios.get("/employees")
    .then((response) =>{
        return response
    })
    .catch((e)=>{
        console.log(e)
    })
}

export default getEmployees
import axios from "config/axios";

async function clientByEmail(email){
    return await axios.get(`/client/byEmail?email=${encodeURIComponent(email)}`)
    .then((data) =>{
        console.log(data)
        return data;
    })
    .catch((err) =>{
        return err;
    })
}

export default clientByEmail;
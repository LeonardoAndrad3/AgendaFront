import axios from "config/axios";

//Conhecimento: o encodeURIComponents é para não dar erros com caracteres especiais.
async function byEmail(email){
    return await axios.get(`/employees/byEmail?email=${encodeURIComponent(email)}`)
    .then((data) =>{
        return data
    })
    .catch((err) =>{
        return err
    })

}

export default byEmail
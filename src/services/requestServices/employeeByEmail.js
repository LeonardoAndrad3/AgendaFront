import axios from "config/axios";


//Conhecimento: o encodeURIComponents é para não dar erros com caracteres especiais.
const byEmail = async(email) =>{
    return await axios.get(`/employees/byEmail?email=${encodeURIComponent(email)}`)
    .then(data =>{
        console.log(data)
    })
    .catch(err =>{
        console.log(err)
    })

}

export {byEmail};
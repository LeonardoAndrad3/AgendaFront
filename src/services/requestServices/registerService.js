import axios from "config/axios";

async function registerService(data) {
    await axios.post("/services/add", data,
        {
            headers:{
                'Content-Type': 'application/json'
            }
        }
    )
    .then((response) => {
        console.log(response)
    })
    .catch()
    
}

export{registerService}
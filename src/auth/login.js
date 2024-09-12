import axios from "config/axios";

//Create class for API auth ;

async function login(data){

        await axios.post("/login", data, {
        headers:{
            'Content-Type': 'application/json'
        }
    })
        .then((response)=>{
            console.log("foi")
            return new Promise((resolve) =>{
                setTimeout(()=>{
                    resolve("test")
                }, 300)
            })
        }) 
        .catch((err) =>{
            console.log(err)
            return new Promise((resolve, reject) =>{
                setTimeout(()=>{
                    reject("não foi")
                }, 300)
            })
        })
 
}

export {login};
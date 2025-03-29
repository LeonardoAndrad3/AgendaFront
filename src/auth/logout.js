import request from "config/axios";

//Create class for API auth ;

export const Logout = async () => {
        return await request.post("/auth/logout", {}, {
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>{
            console.log(response);
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

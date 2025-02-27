import React from "react";
import axios from "config/axios";

//Create class for API auth ;

export const Login = async (data) => {

        return await axios.post("/login", data, {
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>{
            const token = response.data.token;
            return token;
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

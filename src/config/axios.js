//axios
import axios from "axios";

// request.interceptors.request.use(config =>{
//     const token = localStorage.getItem("token");
//     console.log(token)
//     if(token)
//         config.headers.authorization = `Bearer ${token}`;
//     console.log(config)
//     return config

// }, (err) =>{
//     return Promise.reject(err);
// })

export default axios.create({
    baseURL:"http://localhost:8080",
    withCredentials: true
});
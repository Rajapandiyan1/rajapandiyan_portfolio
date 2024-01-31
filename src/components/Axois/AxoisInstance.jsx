import axios from "axios";

let instace=axios.create({
    baseURL:'https://identitytoolkit.googleapis.com',
    
})
instace.interceptors.request.use((config)=>{ console.log("Before Axois in Interceptors",config);  return  config})
instace.interceptors.response.use((config)=>{ console.log("After Axois in Interceptors",config); return config})
export default instace;
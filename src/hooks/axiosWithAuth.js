import axios from "axios"

const axiosWithAuth=()=>{
    const token = localStorage.getItem("token")
    return axios.create({
        baseURL:"http://localhost:4000/api",
        headers:{
            authorization:`Bearer ${token}`,
            "Content-Type":"application/json",
            withCredentials:true}
            
        
    })
}
export default axiosWithAuth;
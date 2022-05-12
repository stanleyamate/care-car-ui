import axios from "axios"

const axiosWithAuth=()=>{
    const token = localStorage.getItem("token")
    return axios.create({
        baseURL:"https://auto-care-api.herokuapp.com/api",
        headers:{
            authorization:`Bearer ${token}`,
            withCredentials:true
        }
    })
}
export default axiosWithAuth;
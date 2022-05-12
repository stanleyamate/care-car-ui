import axios from 'axios'
const BASE_URL="https://auto-care-api.herokuapp.com"

export default axios.create({
    baseURL: BASE_URL,
})
// export const axiosPrivate =axios.create({
//     baseURL:"https://auto-care-api.herokuapp.com/api",
//     headers:{ 'Content-Type': 'application/json'},
//       withCredentials:true
// })


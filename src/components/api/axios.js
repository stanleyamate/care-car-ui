import axios from 'axios'

export default axios.create({
    baseURL:"http://localhost:4000"
})
export const config={
    headers:{
      'Content-Type':'application/json',
      withCredentials:true
    }
  }

export const addService = async ()=>{
    try {
      const response = await  axios
      .post('/services',
       config
      )
      console.log(response.data)
    } catch (e) {
        throw Error("not get services")
    }
}
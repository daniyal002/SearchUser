import axios from 'axios'

export const userVerification = async (body) =>{
return axios.post("http://localhost:3000/userVerification", body).then(response =>{ return response.data})
}

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080';
const consulta = async () =>{
    const Api = `:8080/hola`
    
    const response = await axios.get('/hola')
    let data = response.data()
    console.log(data)
}



export default consulta
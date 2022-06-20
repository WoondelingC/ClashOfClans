import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080';
const consulta = async () =>{
    const url = `/hola`
    const resp = await axios.get(url);
    const data = await resp.data;
    return data
}



export default consulta
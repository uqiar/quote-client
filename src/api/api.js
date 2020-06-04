import axios from 'axios';
import resolve from './resolve';

let apiBase = process.env.REACT_APP_API_BASEURL;
let apiBaseUrl = apiBase + "/api"


const createUser = async (data) => {
    return await resolve(axios.post(`${apiBaseUrl}/register`, data).then(res => res.data));
}
const login = async (data) => {
    return await resolve(axios.post(`${apiBaseUrl}/login`, data).then(res => res.data));
}



export {
    createUser,
    login
}

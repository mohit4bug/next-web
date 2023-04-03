import axios from 'axios'
export const redditRequest = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true
})

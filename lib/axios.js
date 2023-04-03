import axios from 'axios'
export const redditRequest = axios.create({

    baseURL: process.env.NODE_ENV === 'production' ? 'https://reddit-mohitkhatri.vercel.app/api' : 'http://localhost:3000/api',
    withCredentials: true
})

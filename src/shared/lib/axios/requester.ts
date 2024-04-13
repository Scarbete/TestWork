import axios, { AxiosInstance } from 'axios'

const createApi = (): AxiosInstance => {
    return axios.create({
        baseURL: process.env.BASE_URL,
    })
}

export const $mainApi = createApi()
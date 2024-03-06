import axiosService from "./axiosService";

axiosService.interceptors.request.use((request) => {
    return request
})

axiosService.interceptors.response.use((response) => {
    console.log(response)
    return response
})


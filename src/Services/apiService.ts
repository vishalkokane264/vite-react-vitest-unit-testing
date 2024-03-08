import axios from "axios"
import axiosService from "./axiosService"

export const callGetApi =  ({ url, params, headers, body }) => {
     return fetch(url).then((response) => response.json()).catch((error)=>console.error(error))
}

export default callGetApi
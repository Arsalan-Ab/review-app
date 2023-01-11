import axios from "axios";
import { MAIN_URL } from "constants/constant";

interface Params {
    baseUrl: string,
    header: any,
    method: string,
}

const getConfig: Params = {
    baseUrl: MAIN_URL,
    header: {
        contentType: "application/json"
    },
    method: "get"
}

export async function getApi(url: string) {
    return await axios({
        ...getConfig,
        url: `${getConfig.baseUrl}/${url}`,
    }).then((response) => {
        console.log(response)
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) => {
        console.log(error)
        return {
            status: error.status,
            data: error.response
        }
    })
}

const postConfig = {
    baseUrl: MAIN_URL,
    header: {
        contentType: "application/json"
    },
    method: "post"    
}


export  const postAPI = async (url: string, data: any) =>{
    return await axios({
        ...postConfig,
        url: `${postConfig.baseUrl}/${url}`,
        data
    }).then ( (response) => {
        console.log(response)
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) =>{
        console.log(error)
        return {
            status: error.status,
            data: error.response
        }
    })
}



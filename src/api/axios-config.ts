import axios from "axios";

interface AxiosConfig {
    baseUrl: string,
    header: any,
}

const config: AxiosConfig = {
    baseUrl: "",
    header: {
        contentType: "application/json"
    }
}

export async function apiCall(url: string, method: string, token: string, data?: any, contentType?: string) {
    return await axios({
        ...config,
        url: `${config.baseUrl}/${url}`,
        method: method,
        data: data,
        headers: {
            ...config.header,
            'Authorization': `Bearer ${token}`,
            "Content-Type": contentType
        }
    }).then((response) => {
        console.log(response)
        return response.data
    }).catch((error) => {
        console.log(error)
        return error
    })
}

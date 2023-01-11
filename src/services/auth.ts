import { postAPI } from "./axios-config"

interface signupData {
    username: string,
    password: string
}

export function signup(data: signupData) {
    postAPI("Authenticate/Register", data).then((response) => {
        console.log(response.data);
    })
}


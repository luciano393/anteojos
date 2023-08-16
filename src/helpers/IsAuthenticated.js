import getToken from "./UseGetToken"

export const IsAuthenticated = () => {
    if (getToken()) {
        return true
    } 
}
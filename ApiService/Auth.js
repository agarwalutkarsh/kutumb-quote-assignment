import axios from "axios"

export const loginApi = (formData) => {
    try {
        const resp = axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
            username: formData.username,
            otp: formData?.otp
        }, {
            withCredentials: false
        })
        return resp
    } catch (error) {
       console.log(error)
        return error
    }
}
import axios from "axios"

// Login Api service

export const loginApi = async (formData) => {
    try {
        const resp = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
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
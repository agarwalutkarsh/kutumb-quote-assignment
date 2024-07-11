import axios from "axios"

export const getAllQuotes = () => {
    try {
        const resp = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/getQuotes?limit=20&offset=0`, {
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            }
        })
        return resp
    } catch (err) {
        return err
    }
}
import axios from "axios"

export const getAllQuotes = (page) => {
    try {
        const resp = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/getQuotes?limit=10&offset=${(page-1) * 10}`, {
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            }
        })
        return resp
    } catch (err) {
        return err
    }
}
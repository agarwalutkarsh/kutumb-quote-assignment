import axios from "axios"

export const getAllQuotes = async (page) => {
    try {
        const resp = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/getQuotes?limit=10&offset=${(page-1) * 10}`, {
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            }
        })
        return resp
    } catch (err) {
        return err
    }
}

export const getMediaUrl = async (formData) => {
    try {
        const resp = await axios.post(`${process.env.NEXT_PUBLIC_API_MEDIAURL}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return resp
    } catch (err) {
        return err
    }
}

export const createQuoteApi = async (dataBody) => {
    try {
        const resp = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/postQuote`, dataBody, {
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            }
        })
        return resp
    } catch (err) {
        return err
    }
}
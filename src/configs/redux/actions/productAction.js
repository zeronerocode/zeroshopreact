import axios from 'axios'
import * as string from '../string'

export const getProduct = ({ page, limit }) => async (dispacth) => {
    try {
        dispacth({ type: string.GET_PRODUCT_PENDING })
        const { data } = await axios({
            url: 'http://localhost:4000/products',
            method: 'GET'
        })
        dispacth({ type: string.GET_PRODUCT_SUCCESS, payload: { data: data.data, pagination: data.pagination } })
    } catch (error) {
        dispacth({ type: string.GET_PRODUCT_ERROR, payload: error.response })
    }

}

export const insertProduct = ({ dataForm, navigate }) => async (dispacth) => {
    try {
        dispacth({ type: string.ADD_PRODUCT_PENDING })
        const { data } = await axios.post('http://localhost:4000/products', dataForm, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        const dataProduct = data.data
        dispacth({ type: string.ADD_PRODUCT_SUCCESS, payload: dataProduct })
        navigate('/home')
    } catch (error) {
        dispacth({ type: string.ADD_PRODUCT_ERROR, payload: error.response })
    }
}

export const getDetailProduct = (id) => async (dispacth) => {
    try {
        dispacth({ type: string.GET_DETAIL_PRODUCT_PENDING })
        const { data } = await axios({
            url: 'http://localhost:4000/products/'+id,
            method: 'GET'
        })
        const detailProduct =  data.data
        dispacth({ type: string.GET_DETAIL_PRODUCT_SUCCESS, payload: {detailProduct} })
    }catch(error) {
        dispacth({ type: string.GET_DETAIL_PRODUCT_ERROR, payload: error.response })
    }
}
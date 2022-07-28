import * as string from '../string.js'
const initialState = {
    data: [],
    detail: [],
    pagination: {
        currentPage: 0,
        limit: 0,
        totalData: 0,
        totalPage: 0
    },
    error: null
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case string.GET_PRODUCT_PENDING:
            return {
                ...state,
                isLoading: true
            }
        case string.GET_PRODUCT_SUCCESS: 
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        case string.GET_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case string.ADD_PRODUCT_PENDING:
            return {
                ...state,
                isLoading: true
            }
        case string.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        case string.ADD_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case string.GET_DETAIL_PRODUCT_PENDING:
            return {
                ...state,
                isLoading: true
            }
        case string.GET_DETAIL_PRODUCT_SUCCESS:
            return {
                ...state,
                detail : action.payload,
                isLoading: false
            }
        case string.GET_DETAIL_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}


export default productReducer
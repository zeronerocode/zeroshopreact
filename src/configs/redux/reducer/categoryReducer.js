const initialState = {
    data: [],
}
const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case action.type === 'GET_CATEGORY_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case action.type === 'GET_CATEGORY_SUCCESS':
            return {
                ...action.payload,
                isLoading: false
            }
        case action.type === 'GET_CATEGORY':
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            break;
    }
}

export default categoryReducer
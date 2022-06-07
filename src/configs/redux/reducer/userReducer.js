const initialState = {
    user: {
        fullname: '',
        email: '',
        role: ''
    },
    isLoading: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case action.type === 'USER_LOGIN_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case action.type === 'USER_LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
        case action.type === 'USER_REGISTER_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case action.type === 'USER_REGISTER_SUCCESS':
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
        default:
            return state
    }

}

export default userReducer
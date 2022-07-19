import {combineReducers} from 'redux'
import userReducer from './userReducer'
import productReducer from './productReducer'
// import categoryReducer from './categoryReducer'

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,

})

export default rootReducer
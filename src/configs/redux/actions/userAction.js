import axios from 'axios'
import * as string from '../string.js'
import Swal from 'sweetalert2'
export const loginUser = (dataForm, navigate)=> async(dispatch)=>{
    try {
        dispatch({type: string.USER_LOGIN_PENDING})
        const result = await axios.post(`${process.env.REACT_APP_API_BACKEND}/user/login`, dataForm)
        const user = result.data.data
        localStorage.setItem('token', user.token)
        localStorage.setItem('refreshToken', user.refreshToken)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login Success',
            showConfirmButton: false,
            timer: 1500
          })
        dispatch({type: string.USER_LOGIN_SUCCESS, payload: user})
        navigate('/home')
    } catch (error) {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Wrong Email or Password',
            showConfirmButton: false,
            timer: 1500
          })
        dispatch({ type: string.USER_LOGIN_ERROR, payload: error.response })
    }
}

export const registerUser =(dataForm, navigate)=> async(dispatch)=>{
    try {
        dispatch({type: string.USER_REGISTER_PENDING})
        const result = await axios.post(`${process.env.REACT_APP_API_BACKEND}/user/register`,dataForm)
        const user = result.data.data
        dispatch({type: string.USER_REGISTER_SUCCESS, payload: user})
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Register Success',
            showConfirmButton: false,
            timer: 1500
          })
        navigate('/user/login')
    } catch(error){
        dispatch({ type: string.USER_REGISTER_ERROR, payload: error.response })
        console.log(error.response);
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: error.response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
    }
}
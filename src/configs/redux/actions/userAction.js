import axios from 'axios'

export const loginUser = (dataForm, navigate)=> async(dispatch)=>{
    try {
        dispatch({type: 'USER_LOGIN_PENDING'})
        const result = await axios.post('http://localhost:4000/user/login', dataForm)
        const user = result.data.data
        localStorage.setItem('token', user.token)
        localStorage.setItem('refreshToken', user.refreshToken)
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: user})
        navigate('/home')

    } catch (error) {
        console.log(error);
    }
}

export const registerUser =(dataForm, navigate)=> async(dispatch)=>{
    try {
        dispatch({type: 'USER_REGISTER_PENDING'})
        const result = await axios.post('http://localhost:4000/user/register',dataForm)
        const user = result.data.data
        dispatch({type: 'USER_REGISTER_SUCCESS', payload: user})
        navigate('/user/login')
    } catch(error){
        console.log(error);
    }
}
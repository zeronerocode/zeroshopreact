import React, { useState } from 'react'
import style from './login.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../../configs/redux/actions/userAction'
import { Link, useNavigate, } from 'react-router-dom'

const CustomerLogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoading } = useSelector((state) => state.user)
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''

    })

    const handleChange = (e) => {
        setFormLogin({
            ...formLogin,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(loginUser(formLogin, navigate))
    }
    return (
        <div className='container lgn text-center'>
            <div className='logo'>
                <img src={'/img/logo.png'} className='m-2' alt='logo' />
                <p className='font-weight-bold'>Please login with your account</p>
            </div>
            <div className='button-group'>
                <button className='btn text-white bg-danger '>Customer</button>
                <button className='btn border border-primary bg-white'>Seller</button>
            </div>
            <form onSubmit={handleLogin} className='form sign-in  d-flex flex-column justify-content-center'>
                <div className='form-group my-2'>
                    <input
                        className='col-md-4'
                        type={'text'}
                        name={'email'}
                        value={formLogin.email}
                        onChange={handleChange}
                        placeholder={'Email'}
                    />
                </div>
                <div className='form-group my-2'>
                    <input 
                    className='col-md-4' 
                    type={'password'} 
                    name={'password'}
                    value={formLogin.password} 
                    onChange={handleChange}
                    placeholder={'Password'} 
                    />
                </div>
                <div className='form-group'>
                    <p className="text-right mr-10">Forgot Password ?</p>
                    <button className='btn btn-input btn-success bg-danger col-lg-4'>{isLoading ? 'loading..': 'Login'}</button>
                </div>
                <div className="detail">
                    <p>Don't have account ? <span><Link to={"/user/register"} class="text-danger">Register</Link></span> </p>
                </div>
            </form>
        </div>
    )
}

export default CustomerLogin
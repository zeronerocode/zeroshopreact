import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../../configs/redux/actions/userAction'
import './register.css'
import { useNavigate, } from 'react-router-dom'


const CustomerRegister = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoading } = useSelector((state) => state.user)
    const [formRegister, setFormRegister] = useState({
        email: '',
        name:'',
        password: ''

    })

    const handleChange = (e) => {
        setFormRegister({
            ...formRegister,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(registerUser(formRegister, navigate))
    }
    return (
        <div className='container lgn text-center'>
            <div className='logo'>
                <img src={'/img/logo.png'} className='m-2' alt='logo' />
                <p className='font-weight-bold'>Create account</p>
            </div>
            <div className='button-group'>
                <button className='btn btn border border-primary bg-white'>Customer</button>
                <button className='btn text-white bg-danger'>Seller</button>
            </div>
            <form onSubmit={handleRegister} className='form sign-in  d-flex flex-column justify-content-center'>
                <div className='form-group my-2'>
                    <input
                        className='col-md-4'
                        type={'email'}
                        name={'email'}
                        value={formRegister.email}
                        onChange={handleChange}
                        placeholder={'Email'}
                    />
                </div>
                <div className='form-group my-2'>
                    <input className='col-md-4'
                        type={'text'}
                        name={'name'}
                        value={formRegister.name}
                        onChange={handleChange}
                        placeholder={'Full Name'}
                    />
                </div>
                <div className='form-group my-2'>
                    <input
                        className='col-md-4'
                        type={'password'}
                        name={'password'}
                        value={formRegister.password} 
                        onChange={handleChange}
                        placeholder={'Password'}
                    />
                </div>
                <div className='form-group my-2'>
                    <button className='btn btn-input btn-success bg-danger col-lg-4'>{isLoading ? 'loading..': 'Register'}</button>
                </div>
            </form>
        </div>
    )
}

export default CustomerRegister
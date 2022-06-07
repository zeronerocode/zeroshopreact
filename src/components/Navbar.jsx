import React from 'react'
import { FaFilter, FaSearch, FaShoppingCart} from 'react-icons/fa';
import './navbar.css'

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-md">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={'/img/logo.png'} alt=""/>
                        ZeroShop
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <form className="form-inline col-md-8  mt-2 mt-md-0 ">
                        <input className="col-md-8 mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                        <button className="btn" type="submit"><FaSearch/></button>
                    </form>
                    <button className="btn"><FaFilter/></button>
                    <div className="button-group d-flex">
                        <button className="btn shpcart"><FaShoppingCart/></button>
                        <button className="login">Login</button>
                        <button className="register">Sign Up</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default navbar
import React from 'react'
import { Navbar } from '../../components'
import './profile.css'

const Profile = () => {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-3 sidebar">
                        <img src={"./img/profile.png"} alt=""/>
                            <span>Johanes Mikael</span>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        <i className="fa fa-user"></i>
                                        Profile
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        <i className="fa fa-map-marker"></i>
                                        Shipping Address
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        <i className="fa fa-user"></i>
                                        My Order
                                    </a>
                                </li>
                            </ul>
                    </nav>
                    <main role="main" className="col-md-9">
                        <div className="col-md-10 prf">
                            <h5>My Profile</h5>
                            <p>Manage your profile information</p>
                            <hr/>
                                <div className="row">
                                    <div className="col-md-8">
                                        <form className="form">
                                            <div className="form-group row">
                                                <label for="inputEmail3" className="col-sm-4 col-form-label">Name</label>
                                                <div className="col-sm-8">
                                                    <input type="email" className="form-control" id="inputEmail3"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="inputEmail3" className="col-sm-4 col-form-label">Email</label>
                                                <div className="col-sm-8">
                                                    <input type="email" className="form-control" id="inputEmail3"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="inputEmail3" className="col-sm-4 col-form-label">Phone Number</label>
                                                <div className="col-sm-8">
                                                    <input type="email" className="form-control" id="inputEmail3"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="inputEmail3" className="col-sm-4 col-form-label">Gender</label>
                                                <div className="col-sm-8 chk">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                                        <label className="form-check-label" for="inlineRadio1">Laki-laki</label>
                                                        <span>
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                                                <label className="form-check-label" for="inlineRadio2">Perempuan</label>
                                                        </span>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="inputEmail3" className="col-sm-4 col-form-label">Date of birth</label>
                                                <div className="col-sm-8">
                                                    <input type="date" className="form-control" id="inputEmail3"/>
                                                </div>
                                            </div>
                                            <button className="btn btn-save">Save</button>
                                        </form>
                                    </div>
                                    <div className="col-md-4 prfl text-center">
                                        <img src={"./img/profile.png"} alt=""/>
                                            <button className="btn">Select Image</button>
                                    </div>
                                </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Profile
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import './sell.css'
import { Navbar } from '../../components'
import { useSelector, useDispatch } from "react-redux";
import { insertProduct } from '../../configs/redux/actions/productAction'
import { useNavigate, } from 'react-router-dom'

const sellProduct = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoading } = useSelector((state) => state.product)
    const [formProduct, setFormProduct] = useState({
        name: '',
        price: '',
        stock: '',
        description: '',
        idCategory: '',
        filename: 'photo-1653926772255-1de17b40-c750-40ed-a618-ca2c5ee79da0 1.png'
    })
    const [photo, setImage] = useState("");
    const [filename, setImageName] = useState("Choose file");
    const handleChange = (e) => {
        setFormProduct({
            ...formProduct,
            [e.target.name]: e.target.value
        })
    }
    const onFileChange = (e) => {
        setImage(e.target.files[0]);
        setImageName(e.target.files[0].name);
    };
    const handleAddProduct = (e) => {
        e.preventDefault()
        const dataForm = new FormData()
        dataForm.append('filename',formProduct.filename)
        dataForm.append('name',formProduct.name)
        dataForm.append('price',formProduct.price)
        dataForm.append('stock',formProduct.stock)
        dataForm.append('description',formProduct.description)
        dataForm.append('idCategory',formProduct.idCategory)
        console.log(dataForm);
        dispatch(insertProduct(dataForm, navigate))

    }
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 sidebar">
                        <img src={"./img/profile.png"} alt="" />
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
                        <form onSubmit={handleAddProduct} encType="multipart/form-data">
                            <div className="col-md-10 prf">
                                <h5>Inventory</h5>
                                <hr />
                                <div className="form-group">
                                    <label for="">Name of goods</label>
                                    <input
                                        type="text"
                                        className=" col-md-6 form-control"
                                        name={'name'}
                                        value={formProduct.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-10 prf">
                                <h5>Item details</h5>
                                <hr />
                                <div className="form-group">
                                    <label for="">Unit Price</label>
                                    <input
                                        type="text"
                                        className=" col-md-6 form-control"
                                        name={'price'}
                                        value={formProduct.price}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="">Stock</label>
                                    <input
                                        type="text"
                                        className=" col-md-6 form-control"
                                        name={'stock'}
                                        value={formProduct.stock}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="">category</label>
                                    <input
                                        type="text"
                                        className=" col-md-6 form-control"
                                        name={'idCategory'}
                                        value={formProduct.idCategory}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-10 prf">
                                <h5>Photo of goods</h5>
                                <hr />
                                <div className="col-md-11 photo">
                                    <div className="row d-flex justify-content-between">
                                        <div className="col-md-2 photo-1">
                                        </div>
                                    </div>
                                </div>
                                <input
                                    type={'file'}
                                    name={'photo'}
                                    value={formProduct.photo}
                                    onChange={onFileChange}
                                />
                            </div>
                            <div className="col-md-10 prf">
                                <h5>Description</h5>
                                <hr />
                                <div className="form-group">
                                    <label for="">Name of goods</label>
                                    <textarea
                                        type="text"
                                        className="col-md-6 form-control"
                                        name={'description'}
                                        value={formProduct.description}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <button className='btn btn-danger' type='submit'>Jual</button>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default sellProduct
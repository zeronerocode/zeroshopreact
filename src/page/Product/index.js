/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getDetailProduct } from '../../configs/redux/actions/productAction'
import { Navbar } from '../../components'
import { FaStar } from 'react-icons/fa';
import './product.css'
import { Link, useParams } from 'react-router-dom';

const Product = () => {
    const [page, setPage] = useState({
        currentPage: 1,
        limit: 6,
    })
    const idProduct = useParams()
    const { data, detailProduct } = useSelector((state) => state.product);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDetailProduct({
            idProduct
        }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])
    return (
        <div>
            <Navbar />
            <div className='container my-5'>
                <p style={{ color: "gray" }}>Home  &gt;  category  &gt;  T-Shirt</p>
                <div className='row my-5'>
                    {detailProduct && detailProduct.map((detProduct) => (
                        <div className='col-md-4'>
                            <img src={detProduct.photo} alt="" />
                        </div>
                    ))}
                    <div className='col-md-4'>
                        <img src={'/img/1de17b40-c750-40ed-a618-ca2c5ee79da0 1.png'} alt="" />
                    </div>
                    <div className='col-md-8'>
                        <h3>Baju Muslim Pria</h3>
                        <p>Zalora Cloth</p>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><span>10</span>
                        <p>Price</p>
                        <h3>$40.0</h3>
                        <p>color</p>
                        <button className="btn btn-success crl"></button>
                        <button className="btn btn-warning crl"></button>
                        <button className="btn btn-danger crl"></button>
                        <button className="btn btn-dark crl"></button>
                        <br />
                        <button className="btn btn-1 col-md-3 mx-2">Chat</button>
                        <button className="btn btn-1 col-md-3 mx-2">Add Bag</button>
                        <button className="btn btn-2 col-md-5 mx-2">Buy Now</button>
                    </div>
                </div>
                <div className='container'>
                    <h3>Informasi Product</h3>
                    <p>Condition</p>
                    <p>new</p>
                    <p>Description</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>
                        Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum.
                        Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.
                    </p>
                    <p>
                        Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.
                    </p>
                    <p>In ultricies rutrum tempus. Mauris vel molestie orci.</p>
                    <hr />
                </div>
                <div className='container'>
                    <h2>you can also like this</h2>
                    <p>You’ve never seen it before!</p>
                    <div className='row d-flex justify-content-between'>
                        {data.map((item) => (
                            <div className='col-md-2'>
                                <div className="card" key={item.id} style={{ width: '208px' }}>
                                    <img className="card-img-top" src={item.photo} alt="Card" />
                                    <div className="card-body">
                                        <Link to={`/product/${item.id}`}><h5 className="card-title">{item.name}</h5></Link>
                                        <p className="card-text">Rp {item.price}</p>
                                        <p className="card-text"><small className="text-muted">Zalora Cloth</small></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
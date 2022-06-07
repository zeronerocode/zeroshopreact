import React from 'react'
import { Navbar, Card } from '../../components'
import { FaStar } from 'react-icons/fa';
import './product.css'
import axios from "axios";
const CustomerLogin = () => {
    return (
        <div>
            <Navbar />
            <div className='container my-5'>
                <p style={{ color: "gray" }}>Home  &gt;  category  &gt;  T-Shirt</p>
                <div className='row my-5'>
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
                        <button class="btn btn-success crl"></button>
                        <button class="btn btn-warning crl"></button>
                        <button class="btn btn-danger crl"></button>
                        <button class="btn btn-dark crl"></button>
                        <br />
                        <button class="btn btn-1 col-md-3">Chat</button>
                        <button class="btn btn-1 col-md-3">Add Bag</button>
                        <button class="btn btn-2 col-md-5">Buy Now</button>
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
                    <hr/>
                </div>
                <div className='container'>
                    <h2>you can also like this</h2>
                    <p>You’ve never seen it before!</p>
                    <div className='row d-flex justify-content-between'>
                        <div className='col-md-2 col-sm-4'>
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerLogin
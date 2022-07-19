import React from 'react'
import { Navbar } from '../../components'

const Cart = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h3>Checkout</h3>
                <h5>Shipping Address</h5>
                <div className="row">
                    <div className="col-md-8">
                        <div className="address">
                            <h5>Andreas Jane</h5>
                            <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                            <button>Select Another Address</button>
                        </div>
                        <div className="shop-item">
                            <img src="./assets/img/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png" alt=""/>
                                <span>Men's formal suit - Black</span>
                                <span className="float-right">$20.0</span>
                        </div>
                        <div className="shop-item">
                            <img src="./assets/img/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png" alt=""/>
                                <span>Men's formal suit - Black</span>
                                <span className="float-right">$20.0</span>
                        </div>
                    </div>
                    <div className="col-md-4 summary">
                        <h5>Shopping Summary</h5>
                        <p>order <span className="float-right">$40.0</span></p>
                        <p>Delivery <span className="float-right">$5.0</span></p>
                        <hr/>
                            <p>Shopping Summary <span className="float-right">$45.0</span></p>
                            <button className="btn col-md-12">Select Payment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
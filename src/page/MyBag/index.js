import React from 'react'
import { Navbar } from '../../components'
import './mybag.css'

const MyBag = () => {
    return (
        <div>
            <Navbar />

            <div className="container">
                <h2>My Bag</h2>
                <form action="">
                    <div className="row">
                        <div className="col-md-8 ">
                            <div className="form-group form-check total">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">Select all items (2 items selected)</label>
                                    <span className="float-right">delete</span>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <span><img src={"/img/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png"} alt=""/></span>
                                    <label className="form-check-label" for="exampleCheck1">Men's formal suit - Black</label>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck2"/>
                                    <span><img src={"./img/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png"} alt=""/></span>
                                    <label className="form-check-label" for="exampleCheck1">Select all items (2 items selected)</label>
                            </div>
                        </div>
                        <div className="summary col-md-4">
                            <h3>Shopping Summary</h3>
                            <p>Total Price <span className="float-right">$ 40</span></p>
                            <button className="btn col-md-11">Buy</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MyBag
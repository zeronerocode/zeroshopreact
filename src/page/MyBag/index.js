import React from "react";
import { Navbar } from "../../components";
import style from "./mybag.module.css";
import { useNavigate } from "react-router-dom";

const MyBag = () => {
    const navigate = useNavigate()
    const handleBuy = (e) => {
        navigate('/cart')
    }
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>My Bag</h2>
        <form action="">
          <div className="row">
            <div className="col-md-8 ">
              <div className={style.formCheck}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Select all items (2 items selected)
                </label>
                <span className="float-right">delete</span>
              </div>
              <div className={style.formCheck}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <span>
                  <img
                    src={"/img/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png"}
                    alt=""
                  />
                </span>
                <label className="form-check-label" for="exampleCheck1">
                  Men's formal suit - Black
                </label>
              </div>
              <div className={style.formCheck}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck2"
                />
                <span>
                  <img
                    src={
                      "./img/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png"
                    }
                    alt=""
                  />
                </span>
                <label className="form-check-label" for="exampleCheck1">
                  Select all items (2 items selected)
                </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className={style.summary}>
                <h4>Shopping Summary</h4>
                <p>
                  Total Price <span className="float-right">$ 40</span>
                </p>
                <button className="btn col-md-11" onClick={handleBuy}>Buy</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyBag;

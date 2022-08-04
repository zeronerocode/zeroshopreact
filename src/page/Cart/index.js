import React, { useState, useEffect } from "react";
import { Navbar } from "../../components";
import style from "./cart.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const [bagData, setBagData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCheckout = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_BACKEND}/transaction`, {});
      console.log(res.data.data);
      setBagData(res.data.data);
    };
    fetchCheckout();
  }, []);

  const handleCheckout = async (e) => {
    e.preventDefault();
    await axios.patch(
      `${process.env.REACT_APP_API_BACKEND}/transaction`,
      bagData,
      {}
    );
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Checkout Success',
      showConfirmButton: false,
      timer: 1500
    })
    navigate("/home");
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <h3>Checkout</h3>
        <h5>Shipping Address</h5>
        <div className="row">
          <div className="col-md-8">
            <div className={style.address}>
              <h5 className="font-weight-bold">Andreas Jane</h5>
              <p>
                Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c
                16] Sokaraja, Kab. Banyumas, 53181
              </p>
              <button>Select Another Address</button>
            </div>
            <div className={style.shopItem}>
              {/* <img
                src="/img/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png"
                alt=""
              />
              <span className="ml-2">Men's formal suit - Black</span>
              <span className="float-right mt-3 font-weight-bold">$20.0</span> */}
              {bagData &&
                bagData.map((item) => (
                  <div className={style.shopItem}>
                    <img src={item.photo} alt="" />
                    <span className="ml-2">{item.product_name}</span>
                    <span className="float-right mt-3 font-weight-bold">
                      Rp. {item.price}
                    </span>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-md-4">
            <div className={style.summary}>
              <h5>Shopping Summary</h5>
              <p>
                Order{" "}
                <span className="float-right font-weight-bold">$40.0</span>
              </p>
              <p>
                Delivery{" "}
                <span className="float-right font-weight-bold">$5.0</span>
              </p>
              <hr />
              <p>
                Shopping Summary{" "}
                <span className="float-right text-danger font-weight-bold">
                  $45.0
                </span>
              </p>
              <button
                className="btn col-md-12 text-white"
                onClick={handleCheckout}
              >
                Select Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

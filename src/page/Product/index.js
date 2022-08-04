/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetailProduct } from "../../configs/redux/actions/productAction";
import { Navbar } from "../../components";
import { FaStar } from "react-icons/fa";
import "./product.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Product = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { user } = useSelector((state) => state.user);
  // const id = localStorage.getItem('user')
  const {
    detail: { detailProduct },
  } = useSelector((state) => state.product);
  const [bagData, setBagData] = useState({
    idUser: user.id,
    idProduct: params.id,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", user.id);
    }
  });

  useEffect(() => {
    dispatch(getDetailProduct(params.id));
  }, []);

  const addToBag = async () => {
    await axios.post(
      `${process.env.REACT_APP_API_BACKEND}/transaction`,
      bagData,
      {}
    );
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Add to Bag Success',
      showConfirmButton: false,
      timer: 1500
    })
    navigate('/cart')
  };

  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <p style={{ color: "gray" }}>Home &gt; Category &gt; Kemeja</p>
        <div className="row my-5">
          <div className="col-md-4">
            <img src={detailProduct?.photo} height="350" alt="" />
          </div>
          <div className="col-md-8">
            <h4>{detailProduct?.name}</h4>
            <p>Zalora Cloth</p>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span>10</span>
            <p>Price</p>
            <h4>Rp. {detailProduct?.price}</h4>
            <p className="text-bold">color</p>
            <button className="btn btn-success crl mr-2"></button>
            <button className="btn btn-warning crl mr-2"></button>
            <button className="btn btn-danger crl mr-2"></button>
            <button className="btn btn-dark crl mr-2"></button>
            <br />
            <button className="btn btn-1 col-md-3 mx-2">Chat</button>
            <button onClick={addToBag} className="btn btn-1 col-md-3 mx-2">
              Add Bag
            </button>
            <button className="btn btn-2 col-md-5 mx-2">Buy Now</button>
          </div>
        </div>
        <div className="container">
          <h3>Informasi Product</h3>
          <p>Condition</p>
          <p>new</p>
          <p>Description</p>
          <p>{detailProduct?.description}</p>
          <hr />
        </div>
        {/* <div className='container'>
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
                </div> */}
      </div>
    </div>
  );
};

export default Product;

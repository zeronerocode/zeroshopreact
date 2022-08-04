/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./sell.css";
import { Navbar } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import {
  getDetailProduct,
  updateProduct,
} from "../../configs/redux/actions/productAction";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState("");
  const [formProduct, setFormProduct] = useState({
    id: "",
    name: "",
    price: "",
    stock: "",
    description: "",
    idCategory: "",
    photo: "",
  });

  const params = useParams();
  const handleGetDetail = async () => {
    const  result = await dispatch(getDetailProduct(params.id));
    console.log('result =>',result);
    setFormProduct({
      ...formProduct,
      id: result.id,
      idCategory: result.idCategory,
      name: result.name,
      description: result.description,
      price: result.price,
      stock: result.stock,
      photo: result.photo,
      file_photo: null,
    });
  };
  useEffect(() => {
    handleGetDetail();
  }, []);

  const handleChange = (e) => {
    setFormProduct((current) => {
      return {
        ...current,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleChangeImage = (e) => {
    const fileFoto = e.target.files[0];
    const previewFoto = URL.createObjectURL(fileFoto);
    setFormProduct({
      ...formProduct,
      file_photo: fileFoto,
      photo: previewFoto,
    });
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const dataForm = new FormData();
    dataForm.append("name", formProduct.name);
    dataForm.append("photo", formProduct.photo);
    dataForm.append("price", formProduct.price);
    dataForm.append("stock", formProduct.stock);
    dataForm.append("description", formProduct.description);
    dataForm.append("idCategory", formProduct.idCategory);
    dispatch(updateProduct(formProduct.id, dataForm))
      .then(() => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Update Product Success',
            showConfirmButton: false,
            timer: 1500
          })
        navigate("/home");
      })
      .catch(() => 
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Update Product Failded',
        showConfirmButton: false,
        timer: 1500
      })
      );
  };
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
                <form onSubmit={handleUpdateProduct} encType="multipart/form-data">
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
                                    <img src={formProduct.photo} height={'200'} alt='preview'/>
                                </div>
                            </div>
                        </div>
                        <input
                            type={'file'}
                            name={'photo'}
                            onChange={handleChangeImage}
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
    );
};

export default Update;

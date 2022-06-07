import React, { useEffect, useState } from 'react'
import { Navbar, Card } from '../../components'
import axios from "axios";


const Home = () => {
  const [product, setProduct] = useState([]);
  async function fetchData() {
    try {
      const result = await axios({
        method: "GET",
        baseURL: process.env.REACT_APP_API_BACKEND,
        url: "/products",
      });
      setProduct(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
      <Navbar />
      <div className='container my-5'>
        <h2>Category</h2>
        <p style={{ color: 'gray' }}>What are you currently looking for</p>
      </div>
      <div className='container my-5'>
        <h2>New</h2>
        <p style={{ color: 'gray' }}>You’ve never seen it before!</p>
        <div className='row d-flex justify-content-between'>
          <div className='col-md-2'>
            <Card />
          </div>
          <div className='col-md-2'>
            <Card />
          </div>
          <div className='col-md-2'>
            <Card />
          </div>
          <div className='col-md-2'>
            <Card />
          </div>
          <div className='col-md-2'>
            {product.map((item) => (
              <div className="card" key={item.id} style={{width: '208px'}}>
                <img className="card-img-top" src={item.photo} alt="Card" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Rp {item.price}</p>
                  <p className="card-text"><small className="text-muted">Zalora Cloth</small></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
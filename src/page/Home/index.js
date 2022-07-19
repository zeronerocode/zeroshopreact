/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Navbar, Card, Category } from '../../components'
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from '../../configs/redux/actions/productAction'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [page, setPage] = useState({
    currentPage: 1,
    limit: 6,
  })
  const navigate = useNavigate()
  const { data, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct({
      page: page.currentPage,
      limit: page.limit
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <div>
      <Navbar />
      <div className='container my-5'>
        <Category/>
      </div>
      <div className='container my-5'>
        <h2>New</h2>
        <p style={{ color: 'gray' }}>You’ve never seen it before!</p>
        <div className='row d-flex justify-content-between'>
          {data.map((item) => (
            <div className='col-md-2'>
              <div className="card" onClick={() => navigate('/product/'+item.id)} key={item.id} style={{ width: '208px' }}>
                <img className="card-img-top" src={item.photo} alt="Card" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Rp {item.price}</p>
                  <p className="card-text"><small className="text-muted">Zalora Cloth</small></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home
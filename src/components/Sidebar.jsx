import React from 'react'

const Sidebar = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
      <nav class="col-md-3 sidebar">
            {/* <img src="./assets/img/profile.png" alt=""> */}
            <span>Johanes Mikael</span>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fa fa-user"></i>
                        Profile
                      </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fa fa-map-marker"></i>
                        Shipping Address
                      </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fa fa-user"></i>
                        My Order
                      </a>
                </li>
            </ul>
          </nav>
      </div>
    </div>
  )
}

export default Sidebar
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Input, Button } from '../../components'
import styles from './navbar.module.css'
import { FaSearch, FaFilter, FaShoppingCart } from 'react-icons/fa'
import { BiEnvelope, BiBell } from 'react-icons/bi'
const Navbar = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const handleLogout = ()=>{
        // localStorage.removeItem('token')
        // localStorage.removeItem('roleId')
        // localStorage.removeItem('refreshToken')
        localStorage.clear()
        navigate('/login')
      }
    return (
        <nav className={styles.navbar}>
            <div>
                <Link className={styles.navbarBrand} to="/">
                    <img className={styles.logo} src={'/img/logo.png'} alt="" />
                    ZeroStore
                </Link>
            </div>
            <div>
                <form class="form-inline my-2 my-lg-0">
                    <Input className={styles.inputSearch} value={''} placeholder="Search" />
                    <Button className={styles.btnSearch} type="submit"><FaSearch /></Button>
                    <Button className={styles.btnFilter}><FaFilter /></Button>
                </form>
            </div>
            <div>
                <Link to={'/cart'}><Button className={styles.shpcart}><FaShoppingCart/></Button></Link>
                {token ? 
                (<>
                <Button className={styles.shpcart}><BiEnvelope/></Button>
                <Button className={styles.shpcart}><BiBell/></Button>
                </>)
                :
                (<>
                <Link to={'/user/login'}><Button className={styles.login} type="submit">Login</Button></Link>
                <Link to={'/user/register'}><Button className={styles.register} type="submit">Register</Button></Link>
                </>)}
            </div>

        </nav>
    )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import { Input, Button } from '../../components'
import styles from './navbar.module.css'
import { FaSearch, FaFilter, FaShoppingCart } from 'react-icons/fa'
const Navbar = () => {
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
                <Button className={styles.shpcart}><FaShoppingCart/></Button>
                <Button className={styles.login} type="submit">Login</Button>
                <Button className={styles.register} type="submit">Register</Button>
            </div>

        </nav>
    )
}

export default Navbar
import React from 'react'
import styles from './Header.module.scss'
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const navigation=useNavigate('')

  return (
    <div>
      <div  className={styles.context}>
        <div className={styles.cont}>
            <div  className={styles.logo}>
                <img src="https://preview.colorlib.com/theme/robotics/img/logo.png" alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="" onClick={()=>navigation('/')}>HOME</a></li>
                    <li><a href="">ABOUT US</a></li>
                    <li><a href="" onClick={()=>navigation('/basket')}>BASKET</a></li>
                    <li><a href="">PRODUCTS</a></li>
                    <li><a href="">BLOG<IoIosArrowDown /></a></li>
                    <li><a href="" onClick={()=>navigation('/wishlist')}>WISHLIST</a></li>
                    <li><a href="">DROPDOWN <IoIosArrowDown /></a></li>
                </ul>
            </nav>
            <div className={styles.menu}>
            <FaBars />
            </div>

        </div>
        
      </div>
    </div>
  )
}

export default Header

import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import SectionOne from '../../components/SectionOne/SectionOne'
import Productcard from '../../components/cards/Productcard'
import styles from './Home.module.scss'
import axios from 'axios'
import SecFour from '../../components/SecFour/SecFour'



const Home = () => {
  const [data, setdata] = useState([]);
 

  const getdata = () => {
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        setdata(res.data.products)
      })
  }
  useEffect(() => {
    getdata()

  }, [])


  const addToBasket = (item) => {
    axios.post('https://664c4fc135bbda10987fd0ce.mockapi.io/basket/basket', item)
  }

  const addToWishlist = (item) => {
    axios.post('https://664c4fc135bbda10987fd0ce.mockapi.io/basket/wishlist', item)
  }



  return (
    <div>
      <Header />
      <SectionOne />

      <div className={styles.title}>
        <h1>Featured Robotics Products to Show</h1>
        <p>Who are in extremely love with eco friendly system</p>
      </div>

      <div className={styles.pro}>
        {
          data && data.map(item => <Productcard key={item.id} item={item} addToBasket={() => addToBasket(item)}  addToWish={()=>addToWishlist (item)}    />)
        }
      </div>
      <SecFour />
    </div>
  )
}

export default Home

import React, { useEffect, useState } from 'react'
import styles from './Wishlist.module.scss'
import axios from 'axios'
import CardWishlist from '../../components/cards/CardWishlist'
import Header from '../../components/header/Header'

const Wishlist = () => {

    const [data, setData]=useState([])


    const getData=()=>{
       axios.get('https://664c4fc135bbda10987fd0ce.mockapi.io/basket/wishlist')
       .then(res=>{
           setData(res.data)
       })
    }
    useEffect(()=>{
       getData()
    },[])

    const deleteItem=(id)=>{
        axios.delete(`https://664c4fc135bbda10987fd0ce.mockapi.io/basket/wishlist/${id}`)
        setTimeout(()=>{
            getData()
        }, 1000)
    }
    

  return (
    <>
         <Header/>
        <div className={styles.pro} >
            {
                data && data.map(item=> <CardWishlist key={item} item={item} sil={()=>deleteItem(item.id)}/>)
            }
        </div>
      
    </>
  )
}

export default Wishlist

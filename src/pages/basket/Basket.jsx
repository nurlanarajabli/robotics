import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import axios from 'axios'
import CardBasket from '../../components/cards/CardBasket'
import styles from './Basket.module.scss'

const Basket = () => {
 const [data, setData]=useState([])


 const getData=()=>{
    axios.get('https://664c4fc135bbda10987fd0ce.mockapi.io/basket/basket')
    .then(res=>{
        setData(res.data)
    })
 }
 useEffect(()=>{
    getData()
 },[])

const deleteItem=(id)=>{
    axios.delete( `https://664c4fc135bbda10987fd0ce.mockapi.io/basket/basket/${id}`)
    setTimeout(()=>{
        getData()
    }, 1000)
}



  return (
    <>
        <Header/>
        <div className={styles.pro} >
            {
                data && data.map(item=> <CardBasket key={item} item={item} sil={()=>deleteItem(item.id)}/>)
            }
        </div>
      
    </>
  )
}

export default Basket

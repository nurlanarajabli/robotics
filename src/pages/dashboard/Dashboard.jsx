import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header';

const Dashboard = () => {

const[data,setData]=useState([])
const getData=()=>{
    axios.get('https://664c4fc135bbda10987fd0ce.mockapi.io/basket/basket')
    .then(res=>{
        setData(res.data)
    });
};

useEffect(()=>{
    getData()
}, [])

  return (
    <div>
        <Header/>
      
    </div>
  )
}

export default Dashboard

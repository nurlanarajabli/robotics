import React from 'react'
import styles from './DashCard.module.scss'

const DashboardCard = ({ item, sil }) => {
  return (
    <>
      <div className={styles.box}>
       <div className={styles.dashimg}>
        <img src={item.thumbnail} alt="" />
      </div>
      <div className={styles.dashbox}>
        <span>{item.title}</span>
        <span>${item.price}</span>
      </div>
      <button className= {styles.btn} onClick={sil}>Delete</button>
 
      </div>
      
    </>
  )
}

export default DashboardCard

import React from 'react'
import styles from './ProductCaard.module.scss'

const CardBasket = ({item,sil}) => {
  return (
    <>
       <div className={styles.contCard}>
        <div className={styles.card}>
          <div className={styles.cardBox}>
            <img src={item.thumbnail} alt="img" />
          </div>
          <div className={styles.imgBox}>
            <h6>{item.title}</h6>
            <p>${item.price}</p>
            <button onClick={sil}> Delete </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardBasket

import React from "react";
import styles from "./ProductCaard.module.scss";

const Productcard = ({ item, addToBasket, sil }) => {
  return (
    <div>
      <div className={styles.contCard}>
        <div className={styles.card}>
          <div className={styles.cardBox}>
            <img src={item?.thumbnail} alt="img" />
          </div>
          <div className={styles.imgBox}>
            <h6>{item?.title}</h6>
            <p>${item?.price}</p>
            <button onClick={addToBasket}> Add to Card </button>
            <button onClick={sil}>Favori</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productcard;

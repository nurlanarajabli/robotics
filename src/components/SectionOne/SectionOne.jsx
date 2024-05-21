import React from "react";
import styles from "./SectionOne.module.scss";

const SectionOne = () => {
  return (
    <div>
      <div className={styles.sec}>    
          <div className={styles.contTwo}>
            <div className={styles.teext}>
              <h1>Improved Production level with Robotics</h1>
              <p>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</p>
              <button>View Details</button>
            </div>

            <div className={styles.img}>
              <img
                src="https://preview.colorlib.com/theme/robotics/img/banner-img.png"
                alt="imgg"
              />
            </div>
          </div>
        </div>
      </div>

  );
};

export default SectionOne;

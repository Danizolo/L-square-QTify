/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 23/09/2025 - 14:04:03
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 23/09/2025
 * - Author          : DHANUSH
 * - Modification    :
 **/
import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <img
          src={require("../../assets/heroheadphones.png")}
          width={700}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;

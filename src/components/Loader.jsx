import React from "react";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <>
      <div className={styles.back}></div>
      <div className={styles.heart}></div>
    </>
  );
};

export default Loader;

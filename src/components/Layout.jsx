import React from "react";
import styles from "./Layout.module.scss";
import { motion } from "framer-motion";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <motion.div
        className="app"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Your Entire Website Content Here */}
        <h1>Welcome</h1>
      </motion.div>
    </div>
  );
};

export default Layout;

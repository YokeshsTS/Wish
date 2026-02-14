import React from "react";
import styles from "./Layout.module.scss";
import { motion } from "framer-motion";
import PinkStarsBackground from "./PinkStarsBackground";
import Hero from "./Hero.jsx";
import StorySection from "./StorySection.jsx";
import Gallery from "./Gallery.jsx";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <PinkStarsBackground />
      <motion.div
        className="app"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <StorySection />
        <Gallery />
      </motion.div>
    </div>
  );
};

export default Layout;

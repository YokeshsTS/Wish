import React from "react";
import { motion } from "framer-motion";
import "./Hero.scss";
import wish from "../assets/wish.png";

const Hero = () => {
  return (
    <div className="heroMain">
      <motion.div
        className="wishImage"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <img src={wish} alt="wish" />
      </motion.div>
    </div>
  );
};

export default Hero;

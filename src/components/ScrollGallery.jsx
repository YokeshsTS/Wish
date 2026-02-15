import React, { useRef, useState, useEffect } from "react";
import styles from "./ScrollGallery.module.scss";

import img1 from "../assets/cake.png";
import img2 from "../assets/cake.png";
import img3 from "../assets/cake.png";
import img4 from "../assets/cake.png";
import img5 from "../assets/cake.png";

const images = [img1, img2, img3, img4, img5];

const leftImages = Array(11).fill(images).flat();
const rightImages = Array(11).fill(images).flat();

const ScrollGallery = () => {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let requestRef;

    const updateScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate how far into the viewport the section is
        // We want 0 to be when the top of the section enters the bottom of the viewport
        const relativeScroll = windowHeight - rect.top;
        setOffset(relativeScroll);
      }
      requestRef = requestAnimationFrame(updateScroll);
    };

    requestRef = requestAnimationFrame(updateScroll);
    return () => cancelAnimationFrame(requestRef);
  }, []);

  // Opposing scroll calculation
  // Speed multiplier 0.4 for noticeable parallax
  const moveAmount = offset * 0.4;

  // Symmetric starting points in the middle of our repeated image list
  // Left: Starts at -30%, moves UP (-)
  const leftTranslateY = `calc(-30% - ${moveAmount * 2}px)`;
  // Right: Starts at -30%, moves DOWN (+)
  const rightTranslateY = `calc(-30% + ${moveAmount * 5}px)`;

  return (
    <section ref={sectionRef} className={styles.scrollSection}>
      <div className={styles.columnsWrapper}>
        <div
          className={styles.column}
          style={{ transform: `translate3d(0, ${leftTranslateY}, 0)` }}
        >
          {leftImages.map((img, index) => (
            <div key={index} className={styles.imageCard}>
              <img src={img} alt={`left-${index}`} />
            </div>
          ))}
        </div>

        <div
          className={styles.column}
          style={{ transform: `translate3d(0, ${rightTranslateY}, 0)` }}
        >
          {rightImages.map((img, index) => (
            <div key={index} className={styles.imageCard}>
              <img src={img} alt={`right-${index}`} />
            </div>
          ))}
        </div>

        <div
          className={styles.columnThree}
          style={{ transform: `translate3d(0, ${leftTranslateY}, 0)` }}
        >
          {leftImages.map((img, index) => (
            <div key={index} className={styles.imageCard}>
              <img src={img} alt={`left-${index}`} />
            </div>
          ))}
        </div>

        <div
          className={styles.columnFour}
          style={{ transform: `translate3d(0, ${rightTranslateY}, 0)` }}
        >
          {rightImages.map((img, index) => (
            <div key={index} className={styles.imageCard}>
              <img src={img} alt={`right-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollGallery;

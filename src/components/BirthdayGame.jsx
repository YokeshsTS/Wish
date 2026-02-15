import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./BirthdayGame.module.scss";

const questions = [
  "Are you ready for your birthday Gift?",
  "Are you really sure?",
  "Think again before clicking yes",
  "Still confident?",
  "Last chance to change your mind",
  "It could be anything.",
  "Are you absolutely sure??",
  "Still trying huh?",
  "Almost there… one more try!",
  "Okay fine… final attempt",
];

const BirthdayGame = () => {
  const [attempts, setAttempts] = useState(0);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [showPopup, setShowPopup] = useState(false);

  const moveYesButton = () => {
    if (attempts >= 9) {
      window.open("https://www.youtube.com/watch?v=rDUcdOZGy9g", "_blank");
      return;
    }

    const randomTop = Math.random() * 200 - 100;
    const randomLeft = Math.random() * 200 - 100;

    setPosition({ top: randomTop, left: randomLeft });
    setAttempts((prev) => prev + 1);
  };

  const handleNoClick = () => {
    setShowPopup(true);
  };

  return (
    <section className={styles.gameSection}>
      <h2>{questions[attempts]}</h2>

      <div className={styles.buttonContainer}>
        {/* YES Button */}
        <motion.button
          className={styles.yesButton}
          onClick={moveYesButton}
          animate={{ top: position.top, left: position.left }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          YES
        </motion.button>

        {/* NO Button */}
        <button className={styles.noButton} onClick={handleNoClick}>
          NO
        </button>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            className={styles.errorPopup}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2>⚠ SYSTEM ERROR ⚠</h2>
            <p>Option "NO" is currently unavailable.</p>
            <button
              onClick={() => {
                setShowPopup(false);
                setAttempts(0);
                setPosition({ top: 0, left: 0 });
              }}
            >
              Try Again
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BirthdayGame;

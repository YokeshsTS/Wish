import { motion } from "framer-motion";
import styles from "./StorySection.module.scss";
import img1 from "../assets/cake.png";
import img2 from "../assets/cake.png";
import img3 from "../assets/cake.png";

const sections = [
  {
    title: "Azhagiiii",
    text: "I don’t just love you for who you are,I love the way you make my world feel lighter,and how my heart feels at home whenever I’m with you.",
    image: img1,
  },
  {
    title: "Crazy Adventures",
    text: "You’re not just special to me,you’re the reason ordinary days feel beautiful,and simple moments turn into memories I never want to forget.",
    image: img2,
  },
  {
    title: "Hey Angel",
    text: "Having you feels sweet and a little addictive, like once I’m close, I don’t want to step away,and maybe… I don’t even try to.",
    image: img3,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const StorySection = () => {
  return (
    <div className={styles.wrapper}>
      {sections.map((item, index) => {
        const isReverse = index % 2 !== 0;

        return (
          <div
            key={index}
            className={`${styles.section} ${isReverse ? styles.reverse : ""}`}
          >
            {/* TEXT (scroll animation allowed) */}
            <motion.div
              className={styles.text}
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2>
                {item.title.split("").map((char, i) => (
                  <motion.span key={i} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </h2>

              <p>
                {item.text.split("").map((char, i) => (
                  <motion.span key={i} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </p>
            </motion.div>

            {/* IMAGE (no slide, no fade — only wobble) */}
            <div className={styles.image}>
              <motion.img
                src={item.image}
                alt={item.title}
                animate={{ rotate: [-3, 3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StorySection;

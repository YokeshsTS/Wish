import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Gallery.module.scss";

import img1 from "../assets/cake.png";
import img2 from "../assets/cake.png";
import img3 from "../assets/cake.png";
import img4 from "../assets/cake.png";
import img5 from "../assets/cake.png";

const images = [img1, img2, img3, img4, img5];

const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className={styles.slide}>
              <img src={img} alt={`slide-${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;

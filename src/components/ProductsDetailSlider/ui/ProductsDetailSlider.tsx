import { useState } from 'react';
import style from "./style.module.scss";

interface ImageCarouselProps {
  images?: string[];
}



export const ProductsDetailSlider = ({ images = [] }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? images?.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === images?.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={style.carouselContainer}>
      <button className= {`${style.carouselButton} ${style.prev}`} onClick={goToPrev}>
        &lt;
      </button>
      
      <div className={style.carouselSlide}>
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
          className={style.carouselImage}
        />
      </div>
      <button className={`${style.carouselButton} ${style.next}`} onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
};
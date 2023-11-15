import  { useState } from 'react';
import './Slider.css';
import arrowPrev from '../../assets/icon-previous.svg';
import arrowNext from '../../assets/icon-next.svg';
import image1 from '../../assets/image-product-2.jpg'
import image2 from '../../assets/image-product-3.jpg'
import image3 from '../../assets/image-product-4.jpg'
import image4 from '../../assets/image-product-1.jpg'

const Slider = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3,image4];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`slider-container ${props.classes}`} >
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slider-image"
      />

      <button onClick={handlePrev} className="slider-button" style={{ left: '10px' }}>
        <img
          src={arrowPrev}
          alt="Previous"
          style={{ width: '30px', height: '30px', transform: 'translateX(-3px)' }}
        />
      </button>

      <button onClick={handleNext} className="slider-button" style={{ right: '10px' }}>
        <img
          src={arrowNext}
          alt="Next"
          style={{ width: '30px', height: '30px', transform: 'translateX(3px)' }}
        />
      </button>
    </div>
  );
};

export default Slider;

import React, { useState  } from 'react';
import './ProductMain.css';

// images


import close from '../../assets/icon-close.svg'

// components
import Slider from '../Slider/Slider';
import HomeImages from '../HomeImages/HomeImages';
import Price from '../Price/Price';
import AddProduct from '../AddProduct/AddProduct';


const ProductMain = () => {
  const [quan, setQuan] = useState(1);
  
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(() => window.innerWidth);
  
  
  const handleClickImage = ()=>{
    setIsSliderVisible(true)
  }

  return (
    <div className='product-main' >

      {screenWidth <= 768 ?(
        <Slider classes="mobile-slider"/>
      ): (
        <HomeImages handleClickImage={handleClickImage} />
        )}

      <div className="product-details">
        <p className='company'>sneaker company</p>
        <h1>Fall limited addition sneakers</h1>
        <p className='paragraph'>those low profile sneakers are perfect casual wear companion. featuring a durable rubber outer sole , they will withstand everything the weather can offer</p>
        <Price />
        <AddProduct quan={quan} setQuan={setQuan} />
      </div>
      
      {isSliderVisible &&(
        
        <div className='black-screen' >
          <img className='close' src={close} alt=""  onClick={()=>{setIsSliderVisible(false)}}/>
        {isSliderVisible && <Slider index={index} classes="cavani"  /> }
        </div>
      )}
    </div>
  );
};

export default ProductMain;

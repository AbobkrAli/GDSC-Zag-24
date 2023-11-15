import bigImage from '../../assets/image-product-1.jpg';
import image1 from '../../assets/image-product-2.jpg';
import image2 from '../../assets/image-product-3.jpg';
import image3 from '../../assets/image-product-4.jpg';
import './HomeImages.css'



const HomeImages = ({handleClickImage}) => {
  return (
    <div className="product-images">
        <div className="big-image">
            <img src={bigImage} alt="" onClick={handleClickImage}/>
        </div>
        <div className="small-images">
            <img src={bigImage} alt="" onClick={handleClickImage} />
            <img src={image1} alt="" onClick={handleClickImage}/>
            <img src={image2} alt="" onClick={handleClickImage}/>
            <img src={image3} alt="" onClick={handleClickImage}/>
        </div>
    </div>
    
  )
}

export default HomeImages

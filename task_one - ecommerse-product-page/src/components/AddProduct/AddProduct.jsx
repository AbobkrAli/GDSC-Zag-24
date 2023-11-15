import { useContext } from 'react'
import increase from '../../assets/icon-plus.svg';
import decrease from '../../assets/icon-minus.svg';
import { cartContext } from '../../context/cartContext';
import cart from '../../assets/icon-cart.svg';

const AddProduct = ({quan, setQuan}) => {
    const { addToCart } = useContext(cartContext);
  return (
        <div className="add-product">
            <div className="quantity">
                <span className='decrease' onClick={() => { 
                    if(quan < 1){
                        return
                    }else{
                        setQuan(quan-1)
                    }
                    
                    }}>
                <img src={decrease} alt="" />
                </span>
                <span className='num'>
                {quan}
                </span>
                <span className='increase' onClick={() => { setQuan(quan + 1) }}>
                <img src={increase} alt="" />
                </span>
            </div>
            <div className="add-to-cart" onClick={() => {
                if(quan <1){
                    setQuan(1)
                }else{
                    addToCart({
                        name: 'Fall limited addition sneakers',
                        price: 250,
                        quantity: quan
                    });
                    setQuan(1)
                }
                
                setQuan(1);
            }}>
                <img src={cart} alt="" />
                <span>Add to cart</span>
            </div>
        </div>
  )
}

export default AddProduct

import './Price.css'
const Price = () => {
  return (
    <div className="price">
        <div className="new-price">
        <h2>$125.00</h2>
        <div className="offer">
            <button>50%</button>
        </div>
        </div>
        <p className="old-price">$250</p>
    </div>
  )
}

export default Price

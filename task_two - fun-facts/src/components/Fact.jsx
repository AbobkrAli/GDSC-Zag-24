import './styles/Fact.css'
const Fact = ({ text }) => {
  return (
    <div className="relative mt-4">
      <span className="point">
        
      </span>
      <p className="text-2xl text-gray-400">
        {text}
      </p>
    </div>
  )
}

export default Fact

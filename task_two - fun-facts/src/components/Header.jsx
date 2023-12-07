import react from '../assets/react.svg'
const Header = () => {
  return (
    <header className='w-full  bg-gray-700'>
      <div className='w-[90%]  flex justify-between a items-center m-auto py-6'>
        <div className='flex items-center'>
          <img src={react} alt="react logo" 
            className='mr-8 w-14'
          />
          <h1 className='text-blue-400 text-5xl font-bold '>ReactFacts</h1>
        </div>
        <div>
          <h2 className='text-white text-2xl  '>
            React Course - project 1
          </h2>
        </div>
      </div>
    </header>
  )
}

export default Header

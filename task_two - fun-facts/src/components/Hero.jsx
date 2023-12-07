import Fact from "./Fact"

const Hero = () => {
  return (
    <div className="w-full bg-gray-700 h-screen text-white">
      <div className="w-[90%] m-auto">
        <h1 className="text-5xl pt-16 font-bold">Fun Facts About React</h1>
        <div className="w-[85%] m-auto mt-12">
          <Fact text="was first released in 2013"/>
          <Fact text="was originally created by jordon walke"/>
          <Fact text="has well over 100k star on github"/>
          <Fact text="it's maintained by facebook"/>
          <Fact text="powers thousands of entrprise apps ,including mobile apps"/>
        </div>
        
      </div>
    </div>
  )
}

export default Hero

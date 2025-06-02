import React from 'react'
import Image from 'next/image';


{/*interface HeroProps {
  children?: React.ReactNode;
}*/}


function Hero() {
  return (
    <div className="relative mx-auto my-0 ml-6 mr-6">
      <Image
        src="/assets/Images/image 1.png"
        alt="Hero Image"
        width={1920}
        height={1080}
        className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover overflow-hidden rounded-2xl"
      />
    </div>
  )
}

export default Hero;
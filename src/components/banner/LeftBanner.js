import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["FaceBook Page.", "FaceBook Group.", "Family ツ."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div data-aos="fade-down" className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-xs md:text-lg font-normal">WELCOME TO <span className='font-bold text-white md:text-2xl'>𝐓𝐮𝐦<span className='text-designColor'>𝐢</span> - তুমি <span className='text-designColor'>ツ</span></span></h4>
        <h1 className="md:text-6xl text-xl font-bold text-white">
          Hi, It's <span className="text-designColor capitalize">𝐓𝐮𝐦𝐢-তুমিツ</span>
        </h1>
        <h2 className="md:text-4xl text-xl font-bold text-white">
          a <span className='text-[#FEFF86]'>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Welcome to the Official Page Of Tumi- তুমিツ.. <br />
          Like | Comment | Share. <br />
          Stay with us.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner
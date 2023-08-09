import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[300px] lgl:w-[470px] lgl:h-[470px] rounded-full z-10"
        src={bannerImg}
        alt="bannerImg"
      />
    </div>
  );
}

export default RightBanner
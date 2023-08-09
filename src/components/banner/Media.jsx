import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube, FaSnapchatGhost, FaInstagram } from "react-icons/fa";
import { SiTelegram, SiFigma, SiTiktok } from "react-icons/si";
import toast, { Toaster } from 'react-hot-toast';

const Media = () => {

  const youtubeToast = () => toast.success('Comming Soon');


  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a target='_blank' rel="noreferrer" href='https://www.facebook.com/profile.php?id=100095187627858' className="bannerIcon">
              <FaFacebookF />
            </a>
            <a target='_blank' rel="noreferrer" href='https://instagram.com/tumi_tumi.rs?' className="bannerIcon">
            <FaInstagram />
            </a>
            <span onClick={youtubeToast} className="bannerIcon">
              <FaYoutube />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Also In
          </h2>
          <div className="flex gap-4">
            <a target='_blank' rel="noreferrer" href='https://twitter.com/tumi_rs' className="bannerIcon">
            <FaTwitter />
            </a>
            <a target='_blank' rel="noreferrer" href='https://www.tiktok.com/@tumi_rs' className="bannerIcon">
            <SiTiktok />
            </a>
            <a target='_blank' rel="noreferrer" href='https://t.me/tumi_official' className="bannerIcon">
            <SiTelegram />
            </a>
            <a target='_blank' rel="noreferrer" href='https://www.snapchat.com/add/tumi_rs' className="bannerIcon">
            <FaSnapchatGhost />
            </a>
          </div>
        </div>
      </div>
  )
}

export default Media
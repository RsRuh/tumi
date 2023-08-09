import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { MdAdminPanelSettings } from "react-icons/md";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Nowrin Jahan Nila</h3>
        <p className="text-lg font-normal flex items-center gap-1 text-gray-400">
          Admin <MdAdminPanelSettings className='text-green-500' />
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">000000000000</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">tumi.official.rs@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find us in</h2>
        <div className="flex gap-4">
          <a target='_blank' rel="noreferrer" href='https://www.facebook.com/profile.php?id=100095187627858' className="bannerIcon">
            <FaFacebookF />
          </a>
          <a target='_blank' rel="noreferrer" href='https://instagram.com/tumi_tumi.rs?' className="bannerIcon">
            <FaInstagram />
          </a>
          <a target='_blank' rel="noreferrer" href='https://twitter.com/tumi_rs' className="bannerIcon">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft
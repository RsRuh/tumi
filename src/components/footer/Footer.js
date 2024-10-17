import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { logo } from "../../assets/index"

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
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
      <div className="w-full h-full">
        <h3 className="text-xl text-designColor tracking-wider">
          Admin Profile
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <a href='https://www.facebook.com/profile.php?id=100010465983769' target='_blank' rel="noreferrer" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Nowrin Jahan Nila
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          
          <li>
            <a href='https://www.facebook.com/profile.php?id=100095354566399' target='_blank' rel="noreferrer" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Mithila Afrin
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          
          <li>
            <a href='https://www.facebook.com/nidhi.soumi/' target='_blank' rel="noreferrer" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            Nidhi Afrin Safa
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          
          <li>
            <a href='https://www.facebook.com/profile.php?id=100087741426969' target='_blank' rel="noreferrer" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Soumi
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          
          <li>
            <a href='https://www.facebook.com/eyasfi.jui.i/' target='_blank' rel="noreferrer" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            Safa Rahman
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl text-designColor tracking-wider">
         Moderators
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
        <li>
            <a href='https://www.facebook.com/eyasfi.jui.i/' target='_blank' rel="noreferrer" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            Safa Rahman
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
        <li>
            <a href='https://www.facebook.com/profile.php?id=100095072736651' target='_blank' rel="noreferrer" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            Maisha Jannat
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
        <li>
            <a href='https://www.facebook.com/profile.php?id=100094559876038' target='_blank' rel="noreferrer" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            Mehjabin Liza
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
        <li>
            <a href='https://www.facebook.com/profile.php?id=100095292459920' target='_blank' rel="noreferrer" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            Tamanna Tammu
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
        <li>
            <a href='https://www.facebook.com/profile.php?id=100095317188442' target='_blank' rel="noreferrer" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            Tashfia Tisha
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl text-designColor tracking-wider">
          Close Friends
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
        <li>
            <a href='https://www.facebook.com/profile.php?id=61550084120551' target='_blank' rel="noreferrer" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            Sanjida Islam Sara
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
        <li>
            <a href='https://www.facebook.com/profile.php?id=61550063480757' target='_blank' rel="noreferrer" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            Tarin Jebin
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
        <li>
            <a href='https://www.facebook.com/profile.php?id=100095647473325' target='_blank' rel="noreferrer" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            Samira Maira
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
        <li>
            <a href='https://www.facebook.com/profile.php?id=61550074221567' target='_blank' rel="noreferrer" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            Tasmim Mahi
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
        <li>
            <a href='https://www.facebook.com/profile.php?id=100095590354432' target='_blank' rel="noreferrer" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            Morioum Subah
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Footer
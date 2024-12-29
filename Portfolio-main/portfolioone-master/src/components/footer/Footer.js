import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import {bannerImg, logo} from "../../assets/index"
import Banner from '../banner/Banner';
import Contact from '../contact/Contact';

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={bannerImg} alt="logo" />
        <div className="flex gap-4">
         <a href='https://www.instagram.com/ms.pingle'>
          <span className="bannerIcon">
            <FaInstagram />
          </span></a>
          <a href='https://www.linkedin.com/in/pinglevaishnavi/'>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span></a>
           <a href="https://github.com/MsPingle" target="blank">
                        <span className="bannerIcon">
                          <FaGithub />
                        </span>
          </a>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <div className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
            <a href={<Banner/>}>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              About
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span></a>
            <a href={<Banner/>}>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Portfolio
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span></a>
          
          
            <a href={<Contact />}>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Contact
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span></a>
          
        </div>
      </div>
      
      
    </div>
  );
}

export default Footer
import React from 'react'
import './Intro.css';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import vector1 from './../../assets/img/Vector1.png';
import vector2 from './../../assets/img/Vector2.png';
import boy from './../../assets/img/01.png';


function Intro() {
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span>Hey! I'm</span>
                <span>Md.Makbul Hosen</span>
                <span>Full-Stack Developer</span>
            </div>
             <button className='button i-button'>Hire Me</button>
             <div className='i-icons'>
                <a href="https://github.com/mhakash5000" target="_blank"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/md-makbul-hosen-5620b1158/" target="_blank"><FaLinkedin/></a>
                <a href="https://www.instagram.com/mhakash77/" target="_blank"><FaInstagramSquare/></a>
                <a href="https://www.facebook.com/mhakash5000" target="_blank"><FaFacebook/></a>
                <a href="https://www.facebook.com/mhakash5000" target="_blank"><FaTwitterSquare/></a>

             </div>
        </div>
        <div className='i-right'>
           <img src={vector1} alt="" />
           <img src={vector2} alt="" />
           <img src={boy} alt="" />
        </div>
    </div>
  )
}

export default Intro
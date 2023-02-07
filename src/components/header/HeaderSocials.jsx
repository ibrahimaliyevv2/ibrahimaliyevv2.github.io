import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsMedium} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/ibrahimaliyevv2" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/ibrahimaliyevv2" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://medium.com/@ibrahimaliyevv" target="_blank" rel="noopener noreferrer"><BsMedium /></a>
    </div>
  )
}

export default HeaderSocials
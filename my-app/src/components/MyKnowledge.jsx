import React from 'react';
import html from '../images/html-5.png';
import js from '../images/js.png';
import css from '../images/css-3.png';
import docker from '../images/docker.png';
import git from '../images/git.png';
import mysql from '../images/mysql.png';
import nodejs from '../images/nodejs.png';
import reactimg from '../images/reactImg.png';
import jest from '../images/jest.png';
import rtl from '../images/rtl.svg';
import './css/Body/icons.css';

const MyKnowledge = () => {
  const images = [html, css, js, reactimg, jest, rtl, git, docker, mysql, nodejs];
  return (
    <div className='container-images'>
      {images.map((image) => <img src={image} alt="fotos" width="170px" height="170px" className="icons"/>)}
    </div>
    );
}

export default MyKnowledge;
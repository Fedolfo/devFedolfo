import React from 'react';
import html from '../../assets/images/html-5.png';
import js from '../../assets/images/js.png';
import css from '../../assets/images/css-3.png';
import docker from '../../assets/images/docker.png';
import git from '../../assets/images/git.png';
import mysql from '../../assets/images/mysql.png';
import nodejs from '../../assets/images/nodejs.png';
import reactimg from '../../assets/images/reactImg.png';
import jest from '../../assets/images/jest.png';
import rtl from '../../assets/images/rtl.svg';
import './MyKnowledge.css';

const MyKnowledge = () => {
  const images = [
    html,
    css,
    js,
    reactimg,
    jest,
    rtl,
    git,
    docker,
    mysql,
    nodejs,
  ];
  return (
    <div className="container-images">
      {images.map((image) => (
        <img src={image} key={image} alt="fotos" className="icons" />
      ))}
    </div>
  );
};

export default MyKnowledge;

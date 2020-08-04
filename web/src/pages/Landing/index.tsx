import React from 'react'
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyImg from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeart from '../../assets/images/icons/purple-heart.svg'
import  './styles.css'

import {  Link } from 'react-router-dom'



const Landing: React.FC = () => {
  return (

    <div id="page-landing">
      
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="logo-proffy"/>
          <h2>sua plataforma de estudos online</h2>
        </div>

        <img 
          className="hero-image"
          src={landingImg} 
          alt="Plataforma de Estudos"
          />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyImg} alt="Estudar"/>
            Estudar
          </Link>  
          <Link to="give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas"/>
            Dar Aulas
          </Link>  
        </div>



        <span className="total-connections">
          Total de 200 conexões já realizadas
          <img src={purpleHeart} alt="Coração roxo"/>
        </span>

      </div>
    </div>
  );
}

export default Landing;
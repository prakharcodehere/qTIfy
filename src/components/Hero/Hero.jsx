import React from 'react'
import HeroImg  from '../../assets/heroImage.png'
import styles from "./hero.module.css"


const Hero = () => {
  return (
    <div className={styles.hero}>
      <h3>100 thousands Songs,ad-free<br/>
      Over thousands podcast episodes.
      </h3>
    <img className={styles.heroImg} src={HeroImg} alt="hero-image"/>
    
    </div>
  )
}

export default Hero;

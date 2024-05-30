import React from 'react'
import "./Hero.css";
import heroImg from "../../assets/hero-img.png"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import linkedinLight from "../../assets/linkedin-light.svg"
import githubLight from "../../assets/github-light.svg"
import instaLight from "../../assets/instagram-light.svg"
import linkedinDark from "../../assets/linkedin-dark.svg"
import githubDark from "../../assets/github-dark.svg"
import instaDark from "../../assets/instagram-dark.svg"
import { useTheme } from '../../common/ThemeContext';
import resume from "../../assets/Bharath-resume.pdf"
function Hero() {
    const {theme , toggleTheme}=useTheme();
    const themeIcon = theme ==='light'? sun :moon;
    const linkedinLogo = theme ==='light'?linkedinLight :linkedinDark;
    const githubLogo = theme ==='light'?githubLight :githubDark;
    const instaLogo = theme ==='light'?instaLight :instaDark;


  return (
    <section className='container' id="Hero">
        <div className="hero-container">
            <img className='hero' src={heroImg} alt="Profile Picture" />
            <img className="colorMode" src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
        </div>
        <div className="info">
            <h1>Bharath <br/> Kumara</h1>
            <h2>Software Devoloper</h2>
            <span>
                <a href="" target='_blank'>
                    <img src={linkedinLogo} alt="" />
                </a>
                <a href="" target='_blank'>
                    <img src={githubLogo} alt="" />
                </a>
                <a href="" target='_blank'>
                    <img src={instaLogo} alt="" />
                </a>
            </span>
            <p className='description'>Mastering code to craft digital wonders! I'm Bharath Kumara J, a passionate software developer. Let's turn ideas into extraordinary digital experiences together. Dive into my portfolio and let the magic begin!</p>
           <a href={resume} download>
           <button>Resume</button>
           </a>
        </div>
    </section>
  )
}

export default Hero
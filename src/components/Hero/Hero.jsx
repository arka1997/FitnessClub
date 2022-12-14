import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header/>
                <div className="the-best-ad">
                    <div ></div>
                    <span>The best fitness club</span>
                </div>
{/* Hero Heading ends */}

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape</span>
                        <span> Your</span>
                    </div>
                <div className="hero-text">
                    <span>
                        Ideal Body
                    </span>
                </div>
                <div>
                    <span>In this Reactjs project, we will make an awesome responsive gym website step-by-step</span>
                </div>
            </div>
            {/* Figures */}
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness Programs</span>
                    </div>
                </div>

                {/* Hero Buttons */}
                <div className="hero-buttons">
                    <button className="btn">Get started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>


                <div className="heart-rate">
                    <img src={Heart} alt="" className="Heart" />
                    <span>Heart Rate</span>
                    <span>116 BPM</span>
                </div>

                {/* Hero Images */}
                <img src={hero_image} alt="" className="hero_image" />
                <img src={hero_image_back} alt="" className="hero_image_back" />
                {/* calories */}
                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burnt</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero
import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import coaches from '../../assets/coaches.jpg';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png'; 
import NumberCounter from 'number-counter';
import {Link} from 'react-scroll';

const hero = () => {

  return (
    <div className="hero" id='home'>

        <div className="blur hero-blur"></div>

        <div className="left-h">
     {/*The header */}
        <Header/>

    {/*The best ad */}
        <div className="the-best-ad">
            <div></div>
            <span>the best fitness club in Utawala</span>
        </div>

        {/*Hero heading */}
        <div className="hero-text">
            <div>
                <span className="stroker-text">Shape</span>
            <span> Your</span>
            </div>
            <div><span>
                Ideal body.</span></div>
                <div>
                    <span>
                    Inside here we will help you shape and build your ideal body and live up your life to the fullest.
                    </span>
                    
                </div>
        </div>

        {/*figures */}
        <div className="figures">
            <div>
                <span>
                    <NumberCounter end={140} start={100} delay='4' preFix='+' />
                </span>
                <span>Expert coaches</span>
                </div>
            <div>
                <span>
                <NumberCounter end={978} start={800} delay='4' preFix='+' />
                </span>
                <span>members joined</span>
                </div>
            <div>
                <span>
                <NumberCounter end={50} start={25} delay='4' preFix='+' />
                </span>
                <span>fitness programs</span>
                </div>
        </div>

        {/*Hero buttons */}
        <div className="hero-buttons">
            <div className="btn">
                <Link
                to='user_email'
                span={true}
                smooth={true}
                >Get Started</Link>
            </div>

            <div className="btn">
                <Link
                to='user_email'
                span={true}
                smooth={true}
                >Learn more</Link>
            </div>
        </div>
        </div>
        
        {/*Right side */}
        <div className="right-h">
            <button className="btn">
                <Link
                to='user_email'
                span={true}
                smooth={true}
                >Join Now</Link>
            </button>

            <div className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </div>

            {/*Hero images */}
            <img src={coaches} alt='' className='hero-image'/>
            <img src={hero_image_back} alt='' className='hero-image-back'/>

            {/*Calories */}
            <div className="calories">
                <img src={Calories} alt='' />
                <div>
                <span>Calories Burned</span><span>220 kcal</span>
                </div>
            </div>
            </div>
    </div>
  )
}

export default hero

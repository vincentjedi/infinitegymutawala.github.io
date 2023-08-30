import React from 'react'
import './Reasons.css' 
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
import ReactPlayer from 'react-player';



const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
        <div className="left-r">
        
            <ReactPlayer
            className= "reactplayer" 
            width= "12rem"
            height="28rem"
            grid-row= "1/3"
            objectFit= "cover"
            
            url='https://youtube.com/shorts/ZUUZ3iPZrBU'
            controls />

            <ReactPlayer 
            width= "auto"
            height="16rem"
            grid-column= "2/4"
            object-fit = "cover"
            url='https://youtu.be/PlEdczwutIU'
            controls />

            <ReactPlayer 
            width= "14rem"
            height="11.2rem"
            grid-row= "2"
            grid-column= "2/3"
            object-fit = "cover"
            url='https://youtu.be/JbCsyk1wQak'
            controls />

            <img src={image4} alt="" />
        </div>

        <div className="right-r">
            <span>some reasons</span>
            <div className='rsn'>
                <span className='stroker-text'>why</span>
                <span> choose us?</span>
            </div>
            
            <div className='details-r'>
                <div>
                    <img src={tick} alt=""></img>
                        <span>OVER 140+ EXPERT COACHES</span>
                        </div>
                <div>
                    <img src={tick} alt=""></img>
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                        </div>
                <div>
                    <img src={tick} alt=""></img>
                        <span>1 FREE PROGRAM FOR NEW MEMBERS</span>
                        </div>
                <div>
                    <img src={tick} alt=""></img>
                        <span>RELIABLE PARTNERS</span>
                        </div>
            </div>
            <span style={{
                color: 'white',
                fontWeight: "normal",
            }}>OUR PARTNERS</span>

            <div className="partners">
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
            </div>
        </div>

    </div>
  );
}

export default Reasons

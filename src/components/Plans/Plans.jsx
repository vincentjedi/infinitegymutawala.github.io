import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import {Link} from 'react-scroll';

const Plans = () => {
  return (
    <div className="plans-container">
        <div className='blur plans-blur-1'></div>
        <div className='blur plans-blur-2'></div>
        
        <div className="programs-header" style={{gap: "2rem",}}>
            <span className='stroker-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroker-text'>NOW WITH US</span>
        </div>

        {/*plans card */}
        <div className="plans">
            {plansData.map((plan, i)=> (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>Ksh. {plan.price}</span>
                    <div className="features">
                       {plan.features.map((feature, i)=>(
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span key={i}>{feature}</span>
                        </div>
                       ))} 
                </div>
                <div>
                <span>See more benefits...</span>
                </div>
                        <button className="btn">
                            <Link
                            to='user_email'
                            span={true}
                            smooth={true}
                            >Join Now</Link>
                        </button>
                    
                </div>
                    
            ))}; 
        </div>
    </div>
  )
}

export default Plans

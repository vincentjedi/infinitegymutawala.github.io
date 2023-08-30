import React, { useState } from 'react'
import './Header.css'
import Inflogo from '../../assets/inflogo.jpg';
import Bars from '../../assets/bars.png';
import {Link} from 'react-scroll';

const Header = () => {

  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpen, setMenuOpened] = useState(false)

  return (
    <div>
      <div className="header">

        <img src={Inflogo} alt='' className='logo' />
        {(menuOpen=== false && mobile===true)? (
          <div 
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
            cursor: "pointer"
          }}
onClick={()=>setMenuOpened(true)}
          >
            <img src={Bars} alt="" style={{width:"1.5rem", height:"1.5rem"}}/></div>
        ): <ul className='header-menu'>
        <li onClick={()=>setMenuOpened(false)}>
          <Link
          onClick={()=>setMenuOpened(false)}
          to='home'
          span={true}
          smooth={true}
          >Home</Link>
        </li>
        
        <li>
        <Link
        onClick={()=>setMenuOpened(false)}
        to='programs'
        span={true}
        smooth={true}
        >Programs</Link>
        </li>
        
        <li>
        <Link
        onClick={()=>setMenuOpened(false)}
        to='reasons'
        span={true}
        smooth={true}
        >Why Us</Link>
        </li>

        <li>
        <Link
        onClick={()=>setMenuOpened(false)}
        to='plans'
        span={true}
        smooth={true}
        >Plans</Link>
        </li>

        <li>
        <Link
        onClick={()=>setMenuOpened(false)}
        to='Testimonials'
        span={true}
        smooth={true}
        >Testimonials</Link>
        </li>
    </ul>
  }

        
      </div>
    </div>
  )
}

export default Header

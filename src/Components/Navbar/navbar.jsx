import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contact_img from '../../assets/contact.png'
import {Link} from 'react-scroll'

const navbar = () => {
  return (
   <div className="navbar">
    <img src={logo} alt='logo' className='logo'/>
    <div className="desktopMenu">
<Link className='desktopMenuListItem' to=''>Home</Link>
<Link className='desktopMenuListItem' to=''>Skills</Link>
<Link className='desktopMenuListItem' to=''>Projects</Link>
<Link className='desktopMenuListItem' to=''>Resume</Link>
<Link className='desktopMenuListItem' to=''>Contact</Link>
    </div>
    <button className='desktopMenuBtn'>
        <img src={contact_img} alt='' className='desktopMenuImg'/> Contact Me
    </button>
   </div>
  )
}

export default navbar

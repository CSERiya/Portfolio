import React from 'react';
import './intro.css';
import My_img from '../../assets/My_pic.png'
import {Link} from 'react-scroll'
import hire_img from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
<span className='hello'>Hello,</span>
<span className="introText">I'm <span className="introName">Riya</span><br/>Website Developer</span>
<p className='introPara'>I am skilled and passionate MERN stack developer with experience <br/> in building visually appealing and user-friendly
     websites.</p>
    <Link><button className='btn'><img src={hire_img} alt='Hire me'/>Hire me</button></Link>
        </div>
        <img src={My_img} alt='Profile' className='bg'/>
    </section>
  );
}

export default Intro

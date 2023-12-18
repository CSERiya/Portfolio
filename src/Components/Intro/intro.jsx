import React from 'react';
import './intro.css';
import My_img from '../../assets/My_pic.png'  
import {Link} from 'react-scroll'
import hire_img from '../../assets/hireme.png'

const intro = () => {
  return (
    <div id="intro"> 
        <div className="introContent">
<span className='hello'>Hello,&#128075;</span>
<span className="introText">I'm <span className="introName">Riya</span><br/>Website Developer&#x1F469;&#x200D;&#x1F4BB;</span>
<p className='introPara'>I am skilled and passionate MERN stack developer with experience <br/> in building visually appealing and user-friendly
     websites.</p>
    <Link to=''><button className='btn'><img src={hire_img} alt='Hire me' className='btn_img'/>Hire me</button></Link> 
        </div>
        <img src={My_img} alt='Profile' className='My_img'/>
     </div>
     
  );
}

export default intro

import React from 'react'
import './contact.css'
import resume_img from '../../assets/RiyaKumari_Resume.png'
import email from '../../assets/e-mail.jpg'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import GitHub from '../../assets/GitHub.png'

const contact = () => {
  return (
    < div className='contactPage'>
      <div div id="Resume">
<h1 className='contactPageTitle'>My Resume</h1>
<p className="ResumeDesc">Explore my dynamic resume to discover a seasoned MERN full-stack developer with a passion for 
crafting innovative web solutions. With over six months of hands-on experience, my expertise spans the intricacies of 
modern web development. Dive into a showcase of projects, skills, and achievements that reflect my commitment to 
excellence and readiness for new challenges."</p>
<a href="https://drive.google.com/file/d/1yEEvhugzMwQPqK8nBAYx-sSX-sXQepUe/view?usp=drive_link" target='_blank' className="resume-link">Click to View My Resume</a> 
    {/* <br/>
     <br/> */}
     <img src={resume_img} className='resumeimg' alt=''/>
      </div>
      
      <div id="contact">
<h1 className="contactPageTitle">Contact Me</h1>
<div className="contactDesc">Contact me through these social media platforms.</div>
<div className='logo_imgs'>
  <a href='mailto:riyakumari3043@gmail.com' target='_blank'><img src={email} alt='' className='idimg'></img></a>
  <a href='https://www.linkedin.com/in/riya-kumari-902432224/' target='_blank'><img src={linkedin} alt='' className='idimg'></img></a>
  <a href='https://github.com/CSERiya' target='_blank'><img src={GitHub} alt='' className='idimg'></img></a>
  <a href='https://twitter.com/1052Riya3501' target='_blank'><img src={twitter} alt='' className='idimg'></img></a>

</div>
</div>
</div>
  )
}

export default contact

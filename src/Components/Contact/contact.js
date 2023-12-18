import React from 'react'
import './contact.css'
import resume_img from '../../assets/RiyaKumari_Resume.png'

const contact = () => {
  return (
    < div className='contactPage'>
      <div div id="Resume">
<h1 className='contactPageTitle'>My Resume</h1>
<p className="ResumeDesc">Explore my dynamic resume to discover a seasoned MERN full-stack developer with a passion for 
crafting innovative web solutions. With over six months of hands-on experience, my expertise spans the intricacies of 
modern web development. Dive into a showcase of projects, skills, and achievements that reflect my commitment to 
excellence and readiness for new challenges."</p>
<a href="https://drive.google.com/file/d/1yEEvhugzMwQPqK8nBAYx-sSX-sXQepUe/view?usp=drive_link" className="resume-link">Click to View My Resume</a> 
    <br/>
     <br/>
     <img src={resume_img} className='resumeimg' alt=''/>
      </div>
      
      <div id="contact">

</div>
</div>
  )
}

export default contact

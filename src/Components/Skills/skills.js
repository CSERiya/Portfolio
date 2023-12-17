import React from 'react'
import './skills.css'
import webdev_img from '../../assets/web-development.jpg'
import coding_img from '../../assets/coding.avif'
import work_img from '../../assets/work.png' 

const Skills = () => {
  return (
  <section id='skills'>
<span className='skillTitle'> What I Do?</span>
<span className="skillDesc">I am a skilled and passionate website developer with experience in HTML, CSS, JS, React.js. Working on 
Backend part (MongoDB, Node.js, express.Js). Want to work more on Mern full stack development. And I simply enjoy coding and problem-solving.</span>
<div className="skillBars">
<div className="skillBar">
    <img src={webdev_img} alt='webdev' className='skillBarImg'/>
    <div className="skillBarText">
        <h2>Web Development</h2>
<p>I am a fronted developer and working on backend development, so that I can work for MERN full stack domain.</p>
    </div>
</div>
<div className="skillBar">
    <img src={coding_img} alt='coding' className='skillBarImg'/>
    <div className="skillBarText">
        <h2>Programming and DSA</h2>
<p>Solved 2000+ DSA problems (languages C++ and Java) on platforms like Leetcode, Gfg, CodeStudio, etc. Consistency of 300+ days. Leetcode 
    Global Rank- 32k, with various badges for problem solving and swags as appreciation.</p> 
    </div>
</div>
<div className="skillBar">
    <img src={work_img} alt='work' className='skillBarImg'/>
    <div className="skillBarText">
        <h2>Freelancing </h2>
<p>Freelancer at Chegg. I am working as GDSC-AEC Web-tech lead. Core member of Tech Club and Coding Club of my college.</p>
    </div>
</div>
</div>
  </section>
  )
}

export default Skills

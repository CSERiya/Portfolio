import React from 'react'
import './skills.css'
import webdev_img from '../../assets/web-development.jpg'
import coding_img from '../../assets/coding.avif'
import work_img from '../../assets/work.png' 

const Skills = () => {
  return (
  <section id='skills'>
<span className='skillTitle'> Skills</span>
<span className="skillDesc">I am a skilled and passionate website developer with experience in Frontend(HTML, CSS, JS, React.js) 
    and Backend(MongoDB, Node.js, express.Js). Open to work as Mern full stack developer or Software Developer. And I simply enjoy 
    coding and problem-solving.</span>
<div className="skillBars">
<div className="skillBar">
    <img src={webdev_img} alt='webdev' className='skillBarImg'/>
    <div className="skillBarText">
        <h2>Technical Skills</h2>
<p>I am a full-stack developer and working on my personal and college projects.</p>
    </div>
</div>
<div className="skillBar">
    <img src={coding_img} alt='coding' className='skillBarImg'/>
    <div className="skillBarText">
        <h2>Coding Skills</h2>
<p>Solved 2000+ DSA problems (languages C++ and Java) on platforms like Leetcode, Gfg, CodeStudio, etc. Consistency of 365+ days. Leetcode 
    Global Rank- 9k, received various badges and swags for problem solving as appreciation.</p> 
    </div>
</div>
<div className="skillBar">
    <img src={work_img} alt='work' className='skillBarImg'/>
    <div className="skillBarText">
        <h2>Other Skills </h2>
<p>OOP, OS, DBMS, AWS, Communication, Analytical, Networking, LeaderShip, Teamwork, Time-management.</p>
    </div>
</div>
</div>
  </section>
  )
}

export default Skills

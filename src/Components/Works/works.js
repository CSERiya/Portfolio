import React from 'react'
import './works.css'
import img1 from '../../assets/Blogera.png'
import img2 from '../../assets/Newshub.png'
import img3 from '../../assets/Emart.png'

const works = () => {
  return (
    <div className='myworks'>
        <h2 className='workstitle'>My Projects</h2>
<span className='worksDesc'>I have been actively engaged in various web development projects, focusing primarily on MERN full-stack applications
. Having dedicated more than a year to honing my skills, I am now eager to 
transition to industry projects. I am seeking opportunities to expand my knowledge and gain valuable experience within a professional working 
environment.</span>
<div className='worksImgs'>
<a href="https://github.com/CSERiya/Blogera" target="_blank" rel="noopener noreferrer">
  <img src={img1} className="workImgs" alt="" />
</a>
<a href="https://github.com/CSERiya/Newsapp" target="_blank" rel="noopener noreferrer">
  <img src={img2} className="workImgs" alt="" />
</a>
<a href="https://github.com/CSERiya/Emart-MERN" target="_blank" rel="noopener noreferrer">
  <img src={img3} className="workImgs" alt="" />
</a>
      </div>
      <div className='btn1'>
      <a href='https://github.com/CSERiya?tab=repositories' target='_blank'><button className='workBtn'>See More</button></a>
      </div>
      </div>
  )
}

export default works


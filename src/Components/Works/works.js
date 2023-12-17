import React from 'react'
import './works.css'
import img1 from '../../assets/portfolio-1.png'
import img2 from '../../assets/portfolio-2.png'
import img3 from '../../assets/portfolio-3.png'
import img4 from '../../assets/portfolio-4.png'
import img5 from '../../assets/portfolio-5.png'
import img6 from '../../assets/portfolio-6.png'

const works = () => {
  return (
    <div className='myworks'>
        <h2 className='workstitle'>My works</h2>
<span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel
perfect. I am excited to bring my skills and experience to help businesses acheive their goals and create a strong online presence.</span>
<div className='worksImgs'>
        <img src={img1} className='workImgs' alt=''/>
      <img src={img2} className='workImgs' alt=''/>
      <img src={img3} className='workImgs' alt=''/>
      <img src={img4} className='workImgs' alt=''/>
      <img src={img5} className='workImgs' alt=''/>
      <img src={img6} className='workImgs' alt=''/>
      </div>
      <button className='workBtn'>See More</button>
      </div>
  )
}

export default works


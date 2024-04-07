import React from 'react'
import Navbar from '../Components/Navbar'
import './style.scss'

const about = () => {
  return (
    <>
    <Navbar/>
    <div className='technicalskills'>
      <h1>TECHNICAL SKILLS</h1></div>
    <div className='container'>
      <div className='skills'>
        <h2>HTML</h2>
        <div className='progressbar'>
          <div className='html'><span>85%</span></div>
        </div>
        <h2>CSS</h2>
        <div className='progressbar'>
          <div className='css'><span>85%</span></div>
        </div>
        <h2>JAVA</h2>
        <div className='progressbar'>
          <div className='java'><span>75%</span></div>
        </div>
        <h2>JAVASCRIPT</h2>
        <div className='progressbar'>
          <div className='javascript'><span>55%</span></div>
        </div>
        <h2>PYTHON</h2>
        <div className='progressbar'>
          <div className='python'><span>85%</span></div>
        </div>
      </div>
    </div>
    </>
  )
}
export default about

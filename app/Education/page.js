import React from 'react'
import './style.scss'
import Navbar from '../Components/Navbar'

const about = () => {
  return (
    <div>
      <Navbar/>
      <div className='container'>
      <div className='row'>
       <div className='title'>
          <h2>EDUCATION</h2>
       </div>
       <div className='contents'>
        <div className='box'> 
          <h4>2005-2019</h4>
          <h3>Secondary school degree</h3>
          <p>I completed my secondary school with a percentage of 92.6%</p>
        </div>
        <div className='box'>
          <h4>2019-2021</h4>
          <h3>Higher Secondary school degree</h3>
          <p>I completed my senior secondary school with a percentage of 85.6%</p>
        </div>
        <div className='box'>
          <h4>2021-2025</h4>
          <h3>Bachelor Degree</h3>
          <p>I completed my bachelor's degree(Computer Science) from Dayananda Sagar academy of technology and management</p>
        </div>
       </div>
      </div>
      </div>
    </div>
  )
}

export default about

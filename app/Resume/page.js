import React from 'react'
import Navbar from '../Components/Navbar'
import './style.scss'

const page = () => {
  return (
    <>
      <Navbar/>
      <div className='projects'>
        <div className='slide'>
        <div className='portfolio'>
          <img src='./img/tictactoe.png'alt='p1' width="550px" height="450px"className='p1'/>
          <button className='buttons'><a href='https://github.com/ShanyaShrivastava/PRODIGY_WD_02'>Github link</a></button>
        </div>
       
        <div className='portfolio'>
          <img src='./img/resume.png'alt='p1' width="550px" height="450px"className='p1'/>
          <button className='buttons'><a href='https://github.com/ShanyaShrivastava/resume-analyzer'>Github link</a></button>
        </div>
        <div className='portfolio'>
          <img src='./img/cemw.png'alt='p1' width="550px" height="450px"className='p1'/>
          <button className='buttons'><a href='https://github.com/ShanyaShrivastava/Antaragni'>Github link</a></button>
        </div>
       
        <div className='portfolio'>
          <img src='./img/pp.png'alt='p1' width="550px" height="450px"className='p1'/>
          <button className='buttons'><a href=''>Github link</a></button>
        </div>
      </div>
      </div>
    </>
  )
}

export default page
 


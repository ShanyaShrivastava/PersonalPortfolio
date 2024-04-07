import React from 'react'
import './navbar.scss'

const Main = () => {
  return (
    <>
<div className='main'>
  <div className='name' >
    <h2 ><span className='sh'>S</span>HANYA<span className='sh'>S</span>HRIVASTAVA</h2>
    <h1 >DEVELOPER</h1>
   <div className='button'>
    <button ><a href='./shanyaResume.pdf'>Get Resume</a></button>
    <button><a href='/contact'>Hire Me</a></button>
   </div>
  </div>
    <div className='circle'>
      <div className='rotate'>
    <img src="https://www.shareicon.net/data/512x512/2015/09/04/95596_html_512x512.png" width="100px" height="100px"/></div>
    <div>
    <img src='https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png' width="100px" height="100px"/></div>
    <div>
    <img src='https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png'width="100px" height="100px" />
    </div>
    </div>
</div>
    </>
  )
}

export default Main

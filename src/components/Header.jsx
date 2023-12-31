import React from 'react'



export default function Header() {
  return ( 
    <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto" style={{color:'#ff1493'}}><a href="index.html"  style={{color:'#ff1493'}}> Code_It </a> <h4 style={{fontSize: '10px', fontStyle: 'italic'}}>Technologies</h4></h1>
      
       <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          {/* <li><a className="nav-link   scrollto" href="#portfolio">Portfolio</a></li> */}
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
          {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              
              <li><a href="#">Drop down 1</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> */}
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      

    </div>
  </header>
  )
}

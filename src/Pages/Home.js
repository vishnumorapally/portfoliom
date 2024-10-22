import React, { useEffect, useState } from 'react'
// import { Navigate } from 'react-router-dom';
import "./home.css"
import p1 from "../web.jpg"
import { Link, Navigate, useLocation } from 'react-router-dom'
import resume from "../vishnu resume.pdf"
import song from "../song.mp3"


const Home = () => {
  const [tagline, settagline] = useState("FrontEnd Developer")
  useEffect(()=>{
    const ani = setTimeout(() => {
      var tagline = document.querySelector(".tagline")
      tagline.style.animation = "downfall 1s"
      tagline.style.transform = "rotate(3deg)"
    }, 5000)
    return () => clearTimeout(ani)
  },[])
  let location = useLocation()
  let state = location.hash
  return (
    <>
    {/* {<Navigate to={{
      pathname : "/loader",
    }} />} */}

      {/* {
        state === "true" ? console.log("loading") :  <Navigate to={{
          pathname : "/"+location.hash.replace("#",""),
          hash : "false"
        }} />
      } */}

        {/* {location.hash === "true" ? console.log("stop") : <Navigate to={{
          pathname : "/",
          hash : "true"
        }} /> } */}

    <div className='home'>
      <div className='imgesa'>
        <div className='i'>
          <img src={p1} />
        </div>
      </div>
      <div className='details'>
        <div className='title'>
          <h1><span className='fi'>Morapally</span> <span className='se'>Vishnu</span> <span className='th'>Vardhan</span> <span className='fo'>Reddy</span></h1>
        </div>
        <div className='tagline'>
          <h2>{tagline}</h2>
        </div>
        <div className='description'>
          <p>Hello! I'm Vishnu, a Computer Science Engineering student with a passion for technology and problem-solving. This portfolio showcases my Projects, Skills in Web development, algorithms, system design and Contact details. I enjoy working with web development and constantly exploring new technologies.</p>
        </div>
        <a className='btn' href={resume} download>Download Resume</a>
      </div>
      <div className='imgae'>
        <div className='im'>
          <img src={p1} />
        </div>  
      </div>
      
    </div>
    </>
  )
}


export default Home

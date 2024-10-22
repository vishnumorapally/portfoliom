import React from 'react'
import "./about.css"
import cr from "../codeforces.webp"
import { Link, Navigate,useLocation } from 'react-router-dom'

const About = () => {
  var hobies = ()=>{
    var hobies = document.querySelector(".hobies")
    if(hobies.style.maxHeight==="100vh"){
      hobies.style.maxHeight = "9vh"
    }
    else{
      hobies.style.maxHeight = "100vh";
    }
  }

  var platforms = ()=>{
    var platforms = document.querySelector(".platforms")
    if(platforms.style.maxHeight==="100vh"){
      platforms.style.maxHeight = "10vh"
    }
    else{
      platforms.style.maxHeight = "100vh";
    }
  }

  var overview = ()=>{
    var overview = document.querySelector(".overview")
    var platforms = document.querySelector(".platforms")
    var hobies = document.querySelector(".hobies")

    if(overview.style.maxHeight==="100vh"){
      overview.style.maxHeight = "10vh"
      platforms.style.display = "block"
      overview.style.maxWidth = "100px";
      hobies.style.maxHeight = "9vh"
    }
    else{
      overview.style.maxHeight = "100vh";
      platforms.style.display = "none"
      hobies.style.maxHeight = "0vh"
      overview.style.maxWidth = "100vw";
      
    }
  }

  var other = ()=>{
    var other = document.querySelector(".other")
    var overview = document.querySelector(".overview")
    var platforms = document.querySelector(".platforms")
    var hobies = document.querySelector(".hobies")

    if(other.style.maxHeight==="100vh"){
      other.style.maxHeight = "8vh"
      overview.style.maxHeight = "10vh"
      platforms.style.display = "block"
      overview.style.maxWidth = "100px";
      hobies.style.display = "block"
    }
    else{
      other.style.maxHeight = "100vh"
      overview.style.maxHeight = "0vh";
      platforms.style.display = "none"
      hobies.style.display = "none"
      
    }
  }
  let location = useLocation()
  return (
    
    <div>
      {/* {location.hash === "true" ? console.log("stop") : <Navigate to={{
          pathname : "/",
          hash : "true"
        }} /> } */}
      <div className='aboutpage'>
        <h1 className='title-skill'>About<span className='title2'>Me!</span></h1>
        <div className='about-open'>
          <div className='hobies'>
            <h3 onClick={hobies}>Hobies</h3>
            <ul>
              <li>Making Web Projects</li>
              <li>Making Music</li>
              <li>Playing Cricket</li>
              <li>Watching Movies</li>
            </ul>
          </div>
          <div className='platforms'>
            <h3 onClick={platforms}>Coding Platforms</h3>
            <Link to="https://codeforces.com/profile/CMRIT25_21r01a05a4" target='blank' className='lin'>
              <div className='plat'>
                <img src={cr} />
                <h5>CodeForces</h5>
              </div>
            </Link>

            <Link to="https://leetcode.com/u/vishnu_morapally/" target='blank' className='lin'>
              <div className='plat'>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png?f=webp" />
                <h5>leetCode</h5>
              </div>
            </Link>

            <Link to="https://www.codechef.com/users/vishnu_a4" target='blank' className='lin'>
              <div className='plat'>
                <img src="https://img.icons8.com/plasticine/512/codechef.png" />
                <h5>CodeChef</h5>
              </div>
            </Link>


          </div>
          <div className='overview'>
            <h3 onClick={overview}>Overview</h3>
            <div className='twoparts'>
              <div className='str'>
                <h4>Strengths</h4>
                <div>
                  <ul className='w-str'>
                    <li>Programming</li>
                    <li>Problem-Solving</li>
                  </ul>
                </div>
              </div>
              <div className='str'>
                <h4>Weakness</h4>
                <div>
                  <ul className='w-str'>
                    <li>Can work for at a time</li>
                    <li>Dependence on External Resources</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          <div className='other'>
            <h3 onClick={other}>Other Interests</h3>
            <p>Exploring the world is my greatest passion. From trekking through dense forests to wandering vibrant city streets, I thrive on the adventure and cultural discovery that traveling brings. Every journey teaches me something new whether it's learning about a local tradition, capturing breathtaking landscapes through photography, or meeting people with stories from different walks of life.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

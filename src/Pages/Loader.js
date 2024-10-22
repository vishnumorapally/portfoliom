
import { Navigate, useLocation } from "react-router-dom"
import "./loader.css"
import { useEffect, useState } from "react"

const Loader = () => {

  let location = useLocation()
  
  const [state, setstate] = useState(true)

  useEffect(()=>{
    const tiomout = ()=>{
      setTimeout(()=>{
        setstate(false)
      },4000)
    }
    tiomout()
  },[])

  return (
    
    
    <div className='main'>
      {/* {
        state ? console.log("loading") :  <Navigate to={{
          pathname : "/",
          hash : "true"
        }} />
      } */}


      {
        state ? console.log("good") : <Navigate to={{
          pathname : "/about",
          hash : "true"
        }} />
      }
      <div class="wrapper">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="banner">
        <div class="content">
          <h2>Animated <br />
            <b>background</b>
            this is thr condente i am posting now
          </h2>
        </div>
      </div>
      
    </div>
  )
}

export default Loader

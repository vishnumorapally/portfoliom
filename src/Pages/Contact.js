import React from 'react'
import "./Contact.css"
import { Navigate } from 'react-router-dom'
const Contact = () => {
  return (
    <div>
      <div className='Contact'>
        <h1 className='title-skill'>Contact<span className='title2'>Me!</span></h1>
        <div className='contact-apps'> 
          <a class="fa fa-phone j" href='tel:7013652387'></a>
          <a class="fa fa-google j" href='mailto:vishnumorapally2004@gmail.com'></a>
          <a class="fa fa-instagram j" href='https://www.instagram.com/vishnu_morapally/' target='blank'></a>
          
        </div>
        <div className='contact-open'>
          <div className='huid'>
            <input placeholder='Name' className='name' />
            <input placeholder='Mobile' className='name' />
          </div>
          <div>
            <textarea placeholder='Enter Subject' className='subject'/>
          </div>
          <button className='btn-contact'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact

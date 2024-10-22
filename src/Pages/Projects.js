import React from 'react'
import "./project.css"
import rockpa from "../rock paper.png"
import iphone from "../iphone cart page.png"
import { Link } from 'react-router-dom'


const Projects = () => {
  return (
    <div>
      <h1 className='title-skill'>My<span className='title2'>Projects</span></h1>
      <div className='allprojset'>
      <div className='projectsopen'>

        <div className='project'>
          <div className='imgaeinsk'>
            <img src='https://media.istockphoto.com/id/1445426863/vector/chat-bot-vector-logo-design-concept.jpg?s=612x612&w=0&k=20&c=XDdfzS4lNW9yxQ0BQGZq9KMLL4bJ8ywXlYdAhBSuoCA='/>
          </div>
          <h4>Chat Bot</h4>
          <div>
            <Link className='button' to="https://github.com/vishnumorapally/chatbot" target='blank'>Github</Link>
            <Link className='button' to="https://vishnumorapally.github.io/chatbot/" target='blank'>live demo</Link>
          </div>
        </div>


        <div className='project'>
          <div className='imgaeinsk'>
            <img src={rockpa}/>
          </div>
          <h4>rock-paper-scissors-game</h4>
          <div>
            <Link className='button' to="https://github.com/vishnumorapally/rock-paper-scissors-game" target='blank'>Github</Link>
            <Link to="https://vishnumorapally.github.io/rock-paper-scissors-game/" target='blank' className='button'>live demo</Link>
          </div>
        </div>


        <div className='project'>
          <div className='imgaeinsk'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadtxXyVjVDyg7TfbT8FJIdGSXdrT3ex9yqQ&s"/>
          </div>
          <h4>Quiz Game</h4>
          <div>
            <Link className='button' to="https://github.com/vishnumorapally/quiz-game-html" target='blank'>Github</Link>
            <Link className='button' to="https://vishnumorapally.github.io/quiz-game-html/" target='blank'>live demo</Link>
          </div>
        </div>


        <div className='project'>
          <div className='imgaeinsk'>
            <img src="https://store-images.s-microsoft.com/image/apps.8453.13655054093851568.4a371b72-2ce8-4bdb-9d83-be49894d3fa0.7f3687b9-847d-4f86-bb5c-c73259e2b38e?h=210"/>
          </div>
          <h4>Whatsapp Clone</h4>
          <div>
            <Link className='button' to="/nolive">Github</Link>
            <Link className='button' to="/nolive">live demo</Link>
          </div>
        </div>


        <div className='project'>
          <div className='imgaeinsk'>
            <img src="https://images.macrumors.com/t/4f7q_1wFXgE7og9et0c2PDsOCSk=/2250x/article-new/2021/03/Instagram-Feature-1.jpg"/>
          </div>
          <h4>Instagram Clone</h4>
          <div>
            <Link className='button' to="/nolive">Github</Link>
            <Link className='button' to="/nolive">live demo</Link>
          </div>
        </div>


        <div className='project'>
          <div className='imgaeinsk'>
            <img src="https://play-lh.googleusercontent.com/jD8waDJPN1yv4OdcB6_ILw9M4kyNPdtgBYtoTiPrYhxA1l4FLSKXXe4kAcDCjmtZmQ4=w240-h480-rw"/>
          </div>
          <h4>NotePad</h4>
          <div>
            <Link className='button' target='blank' to="https://github.com/vishnumorapally/notepad">Github</Link>
            <Link className='button'  target='blank'>live demo</Link>
          </div>
        </div>


        <div className='project'>
          <div className='imgaeinsk'>
            <img src={iphone}/>
          </div>
          <h4>IPhnoe Cart Page</h4>
          <div>
            <Link className='button' to="https://github.com/vishnumorapally/iphonecartpage" target='blank'>Github</Link>
            <Link className='button' to="https://vishnumorapally.github.io/iphonecartpage/" target='blank'>live demo</Link>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Projects

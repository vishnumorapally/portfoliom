import React from 'react'
import "./skills.css"
const Skills = () => {
  var value = 90
  var maxvalue = 100
  return (

    <div>
      <div>
        <h1 className='title-skill'>My<span className='title2'>Skills</span></h1>
        <div className='getover'>
          <div className='all-skills'>

            {/* this is one skill */}
            <div className='full-skill'>
              <div className='getover'>
                <h4>Front End</h4>
                <div className='skills'>
                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>HTML</span>
                      <span>100%</span>
                    </div>
                    <progress className='progress' value={100} max={maxvalue} />
                  </div>

                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>Css</span>
                      <span>100%</span>
                    </div>
                    <progress className='progress' value={100} max={maxvalue} />
                  </div>

                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>JavaScript</span>
                      <span>90%</span>
                    </div>
                    <progress className='progress' value={value} max={maxvalue} />
                  </div>

                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>React Js</span>
                      <span>90%</span>
                    </div>
                    <progress className='progress' value={value} max={maxvalue} />
                  </div>

                </div>
              </div>
            </div>



            <div className='full-skill'>
              <div className='getover'>
                <h4>Back End</h4>
                <div className='skills'>
                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>Node Js</span>
                      <span>70%</span>
                    </div>
                    <progress className='progress' value={70} max={maxvalue} />
                  </div>

                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>Express Js</span>
                      <span>30%</span>
                    </div>
                    <progress className='progress' value={30} max={maxvalue} />
                  </div>

                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>Django</span>
                      <span>30%</span>
                    </div>
                    <progress className='progress' value={30} max={maxvalue} />
                  </div>

                </div>
              </div>
            </div>



            <div className='full-skill'>
              <div className='getover'>
                <h4>Databases</h4>
                <div className='skills'>
                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>MongoDB</span>
                      <span>80%</span>
                    </div>
                    <progress className='progress' value={80} max={maxvalue} />
                  </div>

                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>MySQL</span>
                      <span>100%</span>
                    </div>
                    <progress className='progress' value={100} max={maxvalue} />
                  </div>
            
                </div>
              </div>
            </div>




            <div className='full-skill'>
              <div className='getover'>
                <h4>Programming Languages</h4>
                <div className='skills'>
                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>Python</span>
                      <span>100%</span>
                    </div>
                    <progress className='progress' value={100} max={maxvalue} />
                  </div>

                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>Java</span>
                      <span>80%</span>
                    </div>
                    <progress className='progress' value={80} max={maxvalue} />
                  </div>

                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>c</span>
                      <span>70%</span>
                    </div>
                    <progress className='progress' value={70} max={maxvalue} />
                  </div>

                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>PHP</span>
                      <span>60%</span>
                    </div>
                    <progress className='progress' value={60} max={maxvalue} />
                  </div>

                </div>
              </div>
            </div>




            <div className='full-skill'>
              <div className='getover'>
                <h4>Languages</h4>
                <div className='skills'>
                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>English</span>
                      <span>90%</span>
                    </div>
                    <progress className='progress' value={90} max={maxvalue} />
                  </div>

                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>Hindi</span>
                      <span>80%</span>
                    </div>
                    <progress className='progress' value={80} max={maxvalue} />
                  </div>

                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>Telugu</span>
                      <span>100%</span>
                    </div>
                    <progress className='progress' value={100} max={maxvalue} />
                  </div>

                </div>
              </div>
            </div>





            <div className='full-skill'>
              <div className='getover'>
                <h4>MS Office</h4>
                <div className='skills'>
                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>MS Word</span>
                      <span>100%</span>
                    </div>
                    <progress className='progress' value={100} max={maxvalue} />
                  </div>

                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>Excel</span>
                      <span>100%</span>
                    </div>
                    <progress className='progress' value={100} max={maxvalue} />
                  </div>

                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>PowerPoint</span>
                      <span>100%</span>
                    </div>
                    <progress className='progress' value={100} max={maxvalue} />
                  </div>

                </div>
              </div>
            </div>




            <div className='full-skill'>
              <div className='getover'>
                <h4>Extra</h4>
                <div className='skills'>
                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>Typing</span>
                      <span>45 WPM</span>
                    </div>
                    <progress className='progress' value={100} max={maxvalue} />
                  </div>

                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>Git</span>
                      <span>90%</span>
                    </div>
                    <progress className='progress' value={90} max={maxvalue} />
                  </div>

                  <div className='skill'>
                    <div className='skill-titles'>
                      <span>VsCode</span>
                      <span>90%</span>
                    </div>
                    <progress className='progress' value={90} max={maxvalue} />
                  </div>

                </div>
              </div>
            </div>










          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

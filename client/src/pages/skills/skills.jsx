import React from 'react'
import './skills.scss'
import Technologies from '../../components/technologies/technologies'
const Skills = () => {
  return (
    <div className='skillsWrapper'>
      <h1>Skills</h1>
      <p>
        I have experience with the following technologies and tools
      </p>
      <div className='skillsList'>
        <Technologies />
      </div>
    </div>
  )
}

export default Skills
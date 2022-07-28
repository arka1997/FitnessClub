import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const Programs = () => {
  return (
    <div className="Programs" id="programs">
        {/* header */}
        <div className="progress-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        {/* first creating a container -> then running a map, and for each product of map, we will produce a card containing the product's info */}
        <div className="program-categories">
            {programsData.map((prog) =>(
                <div className="category">
                  {prog.image}
                  <span>{prog.heading}</span>
                  <span>{prog.details}</span>
                    <div className="join-now">
                      <span>Join Now</span>
                      <img src={RightArrow} alt="" className="src" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs
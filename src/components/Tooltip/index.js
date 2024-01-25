import React, { useState } from 'react';
import './index.scss';
import { skills } from '../../utils/config';

const Tooltip = ({data }) => {

  
// console.log("data.....",data);
  

  return (
    <div className="tooltip-wrapper">
      <div className="tooltip-header border-b-2 w-fit">{"Relevant skills"}</div>
      <div className="tooltip-body">
        <ul className='skill-container'>
          {data && data.map(skill => <li >{skill} <span>&times;</span></li>)}
 
        </ul>
      </div>
      <div className="tooltip-footer">{"footer"}</div>
    </div>
  );
};



export default Tooltip;

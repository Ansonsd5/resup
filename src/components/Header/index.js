import React from 'react'
import { hero } from '../../images'


const Header = () => {
  return (<nav className='nav-bar flex gap-6 py-6 pl-4 '>
    <img src={hero} alt='heroicon'/>
    <p className='text-[$Color]'>Create in a click!</p>
  </nav>
   
  )
}

export default Header
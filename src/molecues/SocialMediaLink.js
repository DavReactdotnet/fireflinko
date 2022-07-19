import React from 'react'

import facebook from '../assets/services/facebook.svg'
import youtube from '../assets/services/youtube.svg'
import linkedin from '../assets/services/linkedin.svg'

const SocialMediaLink = () => {
  return (
    
    <div className='d-flex justify-content-start '>
    <img className='d-inline-block social' src={linkedin} alt='linkedin' />
    <img className='d-inline-block social' src={facebook} alt='facebook' />
    <img className='d-inline-block social' src={youtube} alt='youtube' />
  </div>

  )
}

export default SocialMediaLink
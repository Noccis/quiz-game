import React from 'react'
import { StyledPlayerSection } from './styled/PlayerSection.styled'

const PlayerSection = () => {
  return (
    <StyledPlayerSection>
        <h1 className='margin-bottom'>Player name</h1>
        <div className='flex-row margin-bottom'>
          <p>Kategori:</p>
          <p>kategori</p>
        </div>
        <div className='flex-row'>
          <p>Rätta svar:</p>
          <p>rätta svar</p>
        </div>      
    </StyledPlayerSection>
  )
}

export default PlayerSection
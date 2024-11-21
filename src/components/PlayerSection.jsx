import React from 'react'
import { StyledPlayerSection } from './styled/PlayerSection.styled'
import { usePlayerInfo } from '../context/PlayerContext'

const PlayerSection = () => {

  const {playerName, playerScore} = usePlayerInfo();

  return (
    <StyledPlayerSection>
        <h1 className='margin-bottom'>{playerName}</h1>
        <div className='flex-row margin-bottom'>
          <p>Kategori:</p>
          <p>kategori</p>
        </div>
        <div className='flex-row'>
          <p>Rätta svar:</p>
          <p>{playerScore}</p>
        </div>      
    </StyledPlayerSection>
  )
}

export default PlayerSection
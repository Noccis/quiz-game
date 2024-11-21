import React from 'react'
import { StyledPlayerSection } from './styled/PlayerSection.styled'
import { usePlayerInfo } from '../context/PlayerContext'
import GameSettings from './GameSettings';
import { useQuestions } from "../context/QuestionContext";

const PlayerSection = () => {
  // 

  const { selectedCategory, setSelectedCategory } = useQuestions();
  const {playerName, playerScore} = usePlayerInfo();

  return (
    <StyledPlayerSection>
        <h1 className='margin-bottom'>{playerName}</h1>
        <div className='flex-row margin-bottom'>
          <p>Kategori:</p>
          <p>{selectedCategory}</p>
        </div>
        <div className='flex-row'>
          <p>Rätta svar:</p>
          <p>{playerScore}</p>
        </div>    
        <GameSettings />  
    </StyledPlayerSection>
  )
}

export default PlayerSection
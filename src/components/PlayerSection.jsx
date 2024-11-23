import React from 'react'
import { StyledPlayerSection } from './styled/PlayerSection.styled'
import { usePlayerInfo } from '../context/PlayerContext'
import GameSettings from './GameSettings';
import { useQuestions } from "../context/QuestionContext";

const PlayerSection = () => {
  // 

  const { selectedCategory, categories } = useQuestions();
  const {playerName, playerScore} = usePlayerInfo();

  // Funktion som returnerar label baserat på selectedCategory
const getCategoryLabel = () => {
  const category = categories.find(category => category.value === selectedCategory);
  return category ? category.label : null;  // Returnerar label eller null om inget matchar
};

  return (
    <StyledPlayerSection>
        <h1 className='margin-bottom'>{playerName}</h1>
        <div className='flex-row margin-bottom'>
          <p>Kategori:</p>
          <p>{getCategoryLabel()}</p>
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
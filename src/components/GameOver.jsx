import React from 'react'
import { StyledGameOver } from './styled/GameOver.styled'

const GameOver = ({playerScore}) => {
  return (
    <StyledGameOver>
        <h2>Game over!</h2>
        <p>Poäng denna runda: {playerScore}</p>
    </StyledGameOver>
  )
}

export default GameOver
import React from 'react'
import { StyledQuestionContainer } from './styled/QuestionContainer.styled'

const QuestionContainer = ({question, wrongAnswers, rightAnswer}) => {

  return (
    <StyledQuestionContainer>
        <h1>Question here</h1>
        <p>{question}</p>
        <p>{rightAnswer}</p>
        {Array.isArray(wrongAnswers) ? (
        // Render if it's an array of strings
        <ul>
          {wrongAnswers.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        // Render if it's a single string
        <p>{wrongAnswers}</p>
      )}
    </StyledQuestionContainer>
  )
}

export default QuestionContainer
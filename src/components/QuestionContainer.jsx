import React, { useState } from 'react';
import { StyledQuestionContainer } from './styled/QuestionContainer.styled';

const QuestionContainer = ({ question, choices, selectedAnswer }) => {

  // Handle answer selection
  const handleAnswerSelect = (answer) => {
    console.log("value: " + atob(answer))
    selectedAnswer.current = answer;
    console.log("Selected answer: " + atob(selectedAnswer.current))
  };

  return (
    <StyledQuestionContainer>
      <h1>Question here</h1>
      <p>{question}</p>
      <ul>
        {choices.map((answer, index) => (
          <li key={index}>
            <input
              type="radio"
              id={`answer-${index}`}
              name="answer"
              value={answer}
              checked={selectedAnswer === answer}
              onChange={() => handleAnswerSelect(answer)}
            />
            <label htmlFor={`answer-${index}`}>{atob(answer)}</label>
          </li>
        ))}
      </ul>
        
{/* 
      {isCorrect !== null && (
        <p>{isCorrect ? 'Correct!' : 'Incorrect, try again!'}</p>
      )} */}
    </StyledQuestionContainer>
  );
};

export default QuestionContainer;

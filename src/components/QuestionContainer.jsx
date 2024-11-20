import React, { useState } from 'react';
import { StyledQuestionContainer } from './styled/QuestionContainer.styled';

const QuestionContainer = ({ question, wrongAnswers, rightAnswer, setPlayerScore }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null); // State for selected answer
  const [isCorrect, setIsCorrect] = useState(null); // State for showing if the answer is correct or not

  // Handle answer selection
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  // Check if the selected answer is correct
  const handleCheckAnswer = () => {
    if (selectedAnswer === rightAnswer) {
      setIsCorrect(true);
      setPlayerScore(prevScore => prevScore + 1); // Update the player's score
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <StyledQuestionContainer>
      <h1>Question here</h1>
      <p>{question}</p>
      <ul>
          <li>
            <input
              type="radio"
              id="single-answer"
              name="answer"
              value={rightAnswer}
              checked={selectedAnswer === rightAnswer}
              onChange={() => handleAnswerSelect(rightAnswer)}
            />
            <label htmlFor="single-answer">{rightAnswer}</label>
          </li>
        </ul>
      
      {/* Check if wrongAnswers is an array or a single string */}
      {Array.isArray(wrongAnswers) ? (
        // Render if it's an array of strings
        <ul>
          {wrongAnswers.map((item, index) => (
            <li key={index}>
              <input
                type="radio"
                id={`answer-${index}`}
                name="answer"
                value={item}
                checked={selectedAnswer === item}
                onChange={() => handleAnswerSelect(item)}
              />
              <label htmlFor={`answer-${index}`}>{item}</label>
            </li>
          ))}
        </ul>
      ) : (
        // Render if it's a single string
        <ul>
          <li>
            <input
              type="radio"
              id="single-answer"
              name="answer"
              value={wrongAnswers}
              checked={selectedAnswer === wrongAnswers}
              onChange={() => handleAnswerSelect(wrongAnswers)}
            />
            <label htmlFor="single-answer">{wrongAnswers}</label>
          </li>
        </ul>
      )}

      <button onClick={handleCheckAnswer}>Check Answer</button>

      {isCorrect !== null && (
        <p>{isCorrect ? 'Correct!' : 'Incorrect, try again!'}</p>
      )}
    </StyledQuestionContainer>
  );
};

export default QuestionContainer;

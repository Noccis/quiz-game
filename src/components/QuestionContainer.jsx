import React from "react";
import { StyledQuestionContainer } from "./styled/QuestionContainer.styled";

const QuestionContainer = ({
  question,
  choices,
  selectedAnswer,
  index,
  correctAnswer,
  playerHasAnswered,
}) => {
  const handleAnswerSelect = (answer) => {
    if (!playerHasAnswered) {
      selectedAnswer.current = answer;
    }
  };

  return (
    <StyledQuestionContainer>
      <h3>Question {index}</h3>
      <p>{question}</p>
      <ul>
        {choices.map((answer, idx) => (
          <li
            key={idx}
            onClick={() => handleAnswerSelect(answer)}
            className={`${
              playerHasAnswered
                ? answer === correctAnswer
                  ? "correct"
                  : ""
                : selectedAnswer.current === answer
                ? "selected"
                : ""
            }`}
          >
            {atob(answer)}
          </li>
        ))}
      </ul>
    </StyledQuestionContainer>
  );
};

export default QuestionContainer;

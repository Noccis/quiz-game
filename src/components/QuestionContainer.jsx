import React, { useEffect, useMemo } from "react";
import { StyledQuestionContainer } from "./styled/QuestionContainer.styled";

const QuestionContainer = ({ question, choices, selectedAnswer, index }) => {
  const handleAnswerSelect = (answer) => {
    console.log("value: " + atob(answer));
    selectedAnswer.current = answer;
    console.log("Selected answer: " + atob(selectedAnswer.current));
  };

  useEffect(() => {
    const rightAnswer = choices.length - 1;
    const value = atob(choices[rightAnswer]);
    console.log("Rätt svar: " + value);
  }, [choices]);

  // I use useMemo to shuffle the answers only when `choices` changes because I want the order of the answers to remain until next question
  const shuffledArrayOfChoises = useMemo(() => {
    const moveLastToRandomIndex = (array) => {
      if (array.length < 2) {
        return array;
      }

      const lastElement = array.pop();
      const randomIndex = Math.floor(Math.random() * array.length);
      array.splice(randomIndex, 0, lastElement);
      return array;
    };

    return moveLastToRandomIndex([...choices]); // Create a copy of the choices to avoid mutating the original array
  }, [choices]); // Only recompute when `choices` changes

  return (
    <StyledQuestionContainer>
      <h3>Question {index}</h3>
      <p>{question}</p>
      <ul>
        {shuffledArrayOfChoises.map((answer, idx) => (
          <li
            key={idx}
            onClick={() => handleAnswerSelect(answer)}
            className={selectedAnswer.current === answer ? "selected" : ""}
          >
            {atob(answer)}
          </li>
        ))}
      </ul>
    </StyledQuestionContainer>
  );
};

export default QuestionContainer;

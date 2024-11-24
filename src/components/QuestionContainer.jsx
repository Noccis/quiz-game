import React, { useEffect } from "react";
import { StyledQuestionContainer } from "./styled/QuestionContainer.styled";

const QuestionContainer = ({ question, choices, selectedAnswer, index }) => {
  

  const handleAnswerSelect = (answer) => {
    console.log("value: " + atob(answer));
    selectedAnswer.current = answer;
    console.log("Selected answer: " + atob(selectedAnswer.current));
  };

  useEffect(()=> {
    const rightAnswer = choices.length - 1;
    const value = atob(choices[rightAnswer]);
    console.log("Rätt svar: " + value);  
  },[])

  const moveLastToRandomIndex = (array) => {
    if (array.length < 2) return array; 
  
    const lastElement = array.pop(); // Remove the last element.
    const randomIndex = Math.floor(Math.random() * array.length); // Generate a random index.
  
    array.splice(randomIndex, 0, lastElement); // Insert the last element at the random index.
    return array;
  };

  let shuffledArrayOfChoises = moveLastToRandomIndex(choices);

  return (
    <StyledQuestionContainer>
      <h3>Question {index}</h3>
      <p>{question}</p>
      <ul>
        {choices.map((answer, idx) => (
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

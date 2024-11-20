import React, { useEffect, useState } from "react";
import { StyledTriviaPage } from "../components/styled/TriviaPage.styled";
import { useQuestions } from '../context/QuestionContext';

const TriviaPage = () => {
  
  const { questions, setQuestions } = useQuestions();

  useEffect(() => {
    console.log("Use EFfect running");
  }, []);


  return (
    <StyledTriviaPage>
      <h3>Trivia page</h3>
      {questions.length > 0 ? (
        <p>{questions[0]}</p>
      ) : (
        <p>No questions fetched yet.</p>
      )}
    </StyledTriviaPage>
  );
};

export default TriviaPage;

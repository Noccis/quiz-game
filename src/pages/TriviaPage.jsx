import React from "react";
import { StyledTriviaPage } from "../components/styled/TriviaPage.styled";
import { useQuestions } from '../context/QuestionContext';


const TriviaPage = () => {

  const { questions, loading, error, getQuestions } = useQuestions();

  return (
    <StyledTriviaPage>
      <h3>Trivia page</h3>
      <button onClick={getQuestions} disabled={loading}>
        Fetch Questions
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {questions.length > 0 && (
        <p>
          {atob(questions[0].question)}
        </p>
      )}
    </StyledTriviaPage>
  );
};

export default TriviaPage;

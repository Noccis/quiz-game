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
        <div>
        <p>
          {atob(questions[0].question)}
        </p>
        <p>
          {atob(questions[0].type)}
        </p>
        <p>
          {atob(questions[0].correct_answer)}
        </p>
        </div>
      )}
    </StyledTriviaPage>
  );
};

export default TriviaPage;

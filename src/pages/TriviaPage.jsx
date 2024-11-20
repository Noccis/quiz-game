import React, { useState } from "react";
import { StyledTriviaPage } from "../components/styled/TriviaPage.styled";
import { useQuestions } from '../context/QuestionContext';
import QuestionContainer from "../components/QuestionContainer";


const TriviaPage = () => {

  const { questions, loading, error, getQuestions } = useQuestions();
  const [playerScore, setPlayerScore] = useState(0);

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
          <QuestionContainer 
          question={atob(questions[0].question)}
          rightAnswer={atob(questions[0].correct_answer)}
          wrongAnswers={atob(questions[0].incorrect_answers)}
          
          />
        </div>
      )}
    </StyledTriviaPage>
  );
};

export default TriviaPage;

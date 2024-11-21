import React, { useRef, useState } from "react";
import { StyledTriviaPage } from "../components/styled/TriviaPage.styled";
import { useQuestions } from '../context/QuestionContext';
import QuestionContainer from "../components/QuestionContainer";
import GameOver from "../components/GameOver";


const TriviaPage = () => {
  // Values from the useContext:
  const { questions, loading, error, getQuestions } = useQuestions();
  const [playerScore, setPlayerScore] = useState(0);
  const selectedAnswer = useRef("");
  const [questionIndex, setQuestionIndex] = useState(0);

  function isAnswerRight(){
    if(selectedAnswer.current == questions[questionIndex].correct_answer){
      console.log("Du gissade rätt!!");
      setPlayerScore(playerScore + 1);   
    }else{
      console.log("FEEEEEEEEL!");
    }
    setQuestionIndex(questionIndex + 1);
  }
  
  function getArrayWithChoices() {
    if(questions.length > 0){
      if(Array.isArray(questions[questionIndex].incorrect_answers)){
        let arrayOfChoices = [...questions[questionIndex].incorrect_answers, questions[questionIndex].correct_answer]
        return arrayOfChoices
      }else{
        let arrayOfChoices = [questions[questionIndex].incorrect_answers, questions[questionIndex].correct_answer]
        return arrayOfChoices
      }
      
    }
  }

  return (
    <StyledTriviaPage>
      <button onClick={getQuestions} disabled={loading}>
        Fetch Questions
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {questions.length > 0 && (
       questionIndex < questions.length ? (
        <>
          <QuestionContainer 
            question={atob(questions[questionIndex].question)}
            choices={getArrayWithChoices()}
            selectedAnswer={selectedAnswer}
            index={questionIndex + 1}
          />
          <button onClick={isAnswerRight}>Next</button>
        </>
      ) : (
        <GameOver playerScore={playerScore} />
      )
      )}
    </StyledTriviaPage>
  );
};

export default TriviaPage;

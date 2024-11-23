import React, { useRef, useState } from "react";
import { StyledTriviaPage } from "../components/styled/TriviaPage.styled";
import { useQuestions } from "../context/QuestionContext";
import QuestionContainer from "../components/QuestionContainer";
import GameOver from "../components/GameOver";
import Landing from "../components/Landing";
import { usePlayerInfo } from '../context/PlayerContext'

const TriviaPage = () => {
  // Values from the useContext:
  const { questions, loading, error, getQuestions } = useQuestions();
  const {playerScore, setPlayerScore} = usePlayerInfo();
  const selectedAnswer = useRef("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [startGame, setStartGame] = useState(false);

  // Controll if the guess is correct and will generate a point
  function isAnswerRight() {
    if (selectedAnswer.current == questions[questionIndex].correct_answer) {
      console.log("Du gissade rätt!!");
      setPlayerScore(playerScore + 1);
    } else {
      console.log("FEEEEEEEEL!");
    }
    setQuestionIndex(questionIndex + 1);
  }

  // Take the right answer and put it somewhere random in the array of answers
  function getArrayWithChoices() {
    if (questions.length > 0) {
      if (Array.isArray(questions[questionIndex].incorrect_answers)) {
        let arrayOfChoices = [
          ...questions[questionIndex].incorrect_answers,
          questions[questionIndex].correct_answer,
        ];
        return arrayOfChoices;
      } else {
        let arrayOfChoices = [
          questions[questionIndex].incorrect_answers,
          questions[questionIndex].correct_answer,
        ];
        return arrayOfChoices;
      }
    }
  }

  return (
    <StyledTriviaPage>
      {!startGame && (
        <>
          <Landing />
          <button id="large-button" onClick={()=> {
            setStartGame(true);
            getQuestions();
          }} disabled={loading}>
            Starta spelet
          </button>
        </>
      )}

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {questions.length > 0 &&
        (questionIndex < questions.length ? (
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
        ))}
    </StyledTriviaPage>
  );
};

export default TriviaPage;

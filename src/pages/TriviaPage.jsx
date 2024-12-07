import React, { useRef, useState } from "react";
import { StyledTriviaPage } from "../components/styled/TriviaPage.styled";
import { useQuestions } from "../context/QuestionContext";
import QuestionContainer from "../components/QuestionContainer";
import GameOver from "../components/GameOver";
import Landing from "../components/Landing";
import { usePlayerInfo } from "../context/PlayerContext";

const TriviaPage = () => {
  const { questions, loading, error, getQuestions } = useQuestions();
  const { playerScore, setPlayerScore } = usePlayerInfo();
  const selectedAnswer = useRef("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [startGame, setStartGame] = useState(false);
  const [playerHasAnswered, setPlayerHasAnswered] = useState(false);
  const [feedback, setFeedback] = useState(""); 

  const isAnswerRight = () => {
    if (selectedAnswer.current === questions[questionIndex].correct_answer) {
      setPlayerScore(playerScore + 1);
      setFeedback("Du hade rätt!");
    }else{
      setFeedback("Fel. Se rätt svar ovan i grönt");
    }
    setPlayerHasAnswered(true);
  };

  function goToNextQuestion() {
    setQuestionIndex(questionIndex + 1);
    setPlayerHasAnswered(false);
    setFeedback("");
  }

  return (
    <StyledTriviaPage>
      {!startGame && (
        <>
          <Landing />
          <button
            id="large-button"
            onClick={() => {
              setStartGame(true);
              getQuestions();
            }}
            disabled={loading}
          >
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
              choices={questions[questionIndex].shuffledChoices}
              selectedAnswer={selectedAnswer}
              index={questionIndex + 1}
              correctAnswer={questions[questionIndex].correct_answer}
              playerHasAnswered={playerHasAnswered}
            />
            {playerHasAnswered && <p className="feedback">{feedback}</p>}
            {!playerHasAnswered ? (
              <button onClick={isAnswerRight}>Svara</button>
            ) : (
              <button onClick={goToNextQuestion}>Nästa fråga</button>
            )}
          </>
        ) : (
          <GameOver playerScore={playerScore} />
        ))}
    </StyledTriviaPage>
  );
};

export default TriviaPage;

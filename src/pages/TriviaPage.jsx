import React, { useEffect, useState } from "react";
import { StyledTriviaPage } from "../components/styled/TriviaPage.styled";

const TriviaPage = () => {
  const BASE_URL =
    "https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&encode=base64";
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    console.log("Use EFfect running");
  }, []);

  const fetchQuestions = async () => {
    try {
      const responce = await fetch(BASE_URL);
      const data = await responce.json();
      const results = data.results;
      setQuestions(results);
    } catch (e) {
      console.log("ERROR:" + e);
    }
  };
  return (
    <StyledTriviaPage>
      <h3>Trivia page</h3>
      <button onClick={fetchQuestions}>Fetch Data</button>
      {questions.length > 0 ? (
        <p>{atob(questions[0].question)}</p>
      ) : (
        <p>No questions fetched yet.</p>
      )}
    </StyledTriviaPage>
  );
};

export default TriviaPage;

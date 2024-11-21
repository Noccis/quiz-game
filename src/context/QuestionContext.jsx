import React, { createContext, useState, useContext, useCallback } from "react";
import { fetchData } from "../data/api";

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastFetchTime, setLastFetchTime] = useState(0);

  const getQuestions = useCallback(async () => {
    const now = Date.now();
    if (now - lastFetchTime < 6000) {
      console.log("You must wait before fetching again.");
      return;
    }

    setLoading(true);
    try {
      const data = await fetchData();
      setQuestions(data);
     // console.log(data);
      setLastFetchTime(now);
    } catch (e) {
      setError("Failed to fetch questions.");
    } finally {
      setLoading(false);
    }
  }, [lastFetchTime]);

  return (
    <QuestionContext.Provider value={{ questions, loading, error, getQuestions }}>
      {children}
    </QuestionContext.Provider>
  );
};

// Custom hook to use the QuestionContext
export const useQuestions = () => useContext(QuestionContext);

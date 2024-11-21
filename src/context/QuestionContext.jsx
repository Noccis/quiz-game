import React, { createContext, useState, useContext, useCallback } from "react";
import { fetchData } from "../data/api";

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastFetchTime, setLastFetchTime] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(3);
  const categories = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]

  const getQuestions = useCallback(async () => {
    const now = Date.now();
    if (now - lastFetchTime < 6000) {
      console.log("You must wait before fetching again.");
      return;
    }

    setLoading(true);
    try {
      console.log("QuestionContext running!")
      const data = await fetchData(categories[categoryIndex], 'easy');
      setQuestions(data);
      setLastFetchTime(now);
      console.log("QuestionContext running data recieved! " + data)
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

import React, { createContext, useState, useContext, useCallback } from "react";
import { fetchData } from "../data/api";

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastFetchTime, setLastFetchTime] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(2);
  const [selectedCategory, setSelectedCategory] = useState(17);
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  const categories = [
    { label: "General Knowledge", value: 9 },
    { label: "Books", value: 10 },
    { label: "Film", value: 11 },
    { label: "Music", value: 12 },
    { label: "Musical & theatres", value: 13 },
    { label: "Television", value: 14 },
    { label: "Video games", value: 15 },
    { label: "Board games", value: 16 },
    { label: "Science & nature", value: 17 },
    { label: "Computers", value: 18 },
    { label: "Mathematics", value: 19 },
    { label: "Mythology", value: 20 },
    { label: "Sports", value: 21 },
    { label: "Geography", value: 22 },
    { label: "History", value: 23 },
    { label: "Politics", value: 24 },
    { label: "Art", value: 25 },
    { label: "Celebrities", value: 26 },
    { label: "Animals", value: 27 },
    { label: "Vehicles", value: 28 },
    { label: "Comics", value: 29 },
    { label: "Science: gadgets", value: 30 },
    { label: "Anime & manga", value: 31 },
    { label: "Cartoon & animations", value: 32 },
  ];

  const getQuestions = useCallback(async () => {
    const now = Date.now();
    if (now - lastFetchTime < 6000) {
      console.log("You must wait before fetching again.");
      return;
    }

    setLoading(true);
    try {
      const data = await fetchData(selectedCategory, selectedDifficulty);
      setQuestions(data);
      setLastFetchTime(now);
    } catch (e) {
      setError("Failed to fetch questions.");
    } finally {
      setLoading(false);
    }
  }, [lastFetchTime, selectedCategory, selectedDifficulty]);

  return (
    <QuestionContext.Provider
      value={{
        questions,
        loading,
        error,
        getQuestions,
        categories,
        setCategoryIndex,
        selectedCategory,
        setSelectedCategory,
        selectedDifficulty,
        setSelectedDifficulty,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

// Custom hook to use the QuestionContext
export const useQuestions = () => useContext(QuestionContext);

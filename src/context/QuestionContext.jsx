import React, { createContext, useState, useContext } from 'react';

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState(["What is React?", "What is JavaScript?", "What is HTML?"]);

  return (
    <QuestionContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionContext.Provider>
  );
};

// Custom hook to use the QuestionContext
export const useQuestions = () => useContext(QuestionContext);

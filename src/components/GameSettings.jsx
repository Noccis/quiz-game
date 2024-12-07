import React from "react";
import { useQuestions } from "../context/QuestionContext";
import { StyledGameSettings } from "./styled/GameSettings.styled";

const GameSettings = () => {
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    selectedDifficulty,
    setSelectedDifficulty,
  } = useQuestions();

  const handleCategoryChange = (event) => {
    setSelectedCategory(Number(event.target.value));
  };

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
  };

  return (
    <StyledGameSettings>
      <h2>Game Settings</h2>
      <label>
        Select Category:
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Select Difficulty:
        <select value={selectedDifficulty} onChange={handleDifficultyChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
    </StyledGameSettings>
  );
};

export default GameSettings;

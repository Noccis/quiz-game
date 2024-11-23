import React, { useState } from 'react'
import { StyledGameSettings } from './styled/GameSettings.styled'
import { useQuestions } from "../context/QuestionContext";

const GameSettings = () => {
    const { categories, selectedCategory, setSelectedCategory,selectedDifficulty, setSelectedDifficulty } = useQuestions();
    const difficultyLvl = ["easy", "medium", "hard"];
    
    const handleSelectChange = (event) => {
        const selectedCategory = categories.find(
          (category) => category.value === parseInt(event.target.value)
        );
        setSelectedCategory(selectedCategory.value);
        console.log("Selected Category Value: ", selectedCategory.value);
      };

      const handleDifficultyChange = (event) => {
        setSelectedDifficulty(event.target.value); // Set the selected difficulty
        console.log("Selected Difficulty: ", event.target.value);
      };

  return (
    <StyledGameSettings>
        <h2>Select Category</h2>
      <select value={selectedCategory.value} onChange={handleSelectChange}>
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
      <h2>Select Difficulty</h2>
            <select value={selectedDifficulty} onChange={handleDifficultyChange}>
                {difficultyLvl.map((lvl) => (
                    <option key={lvl} value={lvl}>
                        {lvl}
                    </option>
                ))}
            </select>
    </StyledGameSettings>
  )
}

export default GameSettings
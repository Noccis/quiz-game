import React, { useState } from 'react'
import { StyledGameSettings } from './styled/GameSettings.styled'
import { useQuestions } from "../context/QuestionContext";

const GameSettings = () => {
    const { categories, setCategoryIndex, selectedCategory, setSelectedCategory } = useQuestions();

    const handleSelectChange = (event) => {
        const selectedCategory = categories.find(
          (category) => category.value === parseInt(event.target.value)
        );
        setSelectedCategory(selectedCategory.value);
        console.log("Selected Category Value: ", selectedCategory.value);
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
    </StyledGameSettings>
  )
}

export default GameSettings
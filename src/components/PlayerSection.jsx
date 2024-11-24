import React from "react";
import { StyledPlayerSection } from "./styled/PlayerSection.styled";
import { usePlayerInfo } from "../context/PlayerContext";
import { useQuestions } from "../context/QuestionContext";

const PlayerSection = () => {
  const { selectedCategory, categories } = useQuestions();
  const { playerName, playerScore } = usePlayerInfo();

  const getCategoryLabel = () => {
    const category = categories.find(
      (category) => category.value === selectedCategory
    );
    return category ? category.label : null;
  };

  return (
    <StyledPlayerSection>
      <div>
        <h1 className="margin-bottom">{playerName}</h1>
        <div className="flex-row margin-bottom">
          <h4>Kategori:</h4>
          <p>{getCategoryLabel()}</p>
        </div>
        <div className="flex-row">
          <h4>Rätta svar:</h4>
          <p>{playerScore}</p>
        </div>
      </div>
    </StyledPlayerSection>
  );
};

export default PlayerSection;

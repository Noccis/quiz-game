import React, { useState } from 'react'
import { StyledLanding } from './styled/Landing.styled'
import { usePlayerInfo } from '../context/PlayerContext'
import GameSettings from './GameSettings';

const Landing = () => {

  const {setPlayerName} = usePlayerInfo();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setPlayerName(inputValue);
    console.log("Form submitted with value:", inputValue);
    setInputValue("");
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <StyledLanding>
        <h1 className="margin">Välkommen!</h1>
        <p className="margin">Skriv in ditt namn</p>
        <form onSubmit={handleSubmit} className="margin">
        <input
          type="text"
          placeholder="Namn"
          value={inputValue}
          onChange={handleInputChange}
        />
        <input id='name-button' type="submit" value={"Lägg till"} />
      </form>
      <GameSettings />
    </StyledLanding>
  )
}

export default Landing
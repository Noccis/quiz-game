import React, { useState } from 'react'
import { StyledLanding } from './styled/Landing.styled'
import { usePlayerInfo } from '../context/PlayerContext'

const Landing = () => {

  const {playerName, setPlayerName} = usePlayerInfo();
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
        <input type="submit" value={"Lägg till"} />
      </form>
    </StyledLanding>
  )
}

export default Landing
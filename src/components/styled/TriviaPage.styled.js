import styled from "styled-components";

export const StyledTriviaPage = styled.div`
  height: 450px;
  width: 75%;
  padding: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin: 20px;
    padding: 5px;
    background-color: rgb(12, 88, 159);
    color: white;
    border-radius: 7px;
  }

  #large-button {
    width: 160px;
    height: 50px;
    font-size: 1.5rem;
  }

  .feedback {
    margin-top: 20px;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

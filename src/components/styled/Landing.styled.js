import styled from "styled-components";

export const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    border-radius: 5px;
    margin: 2px;
    padding: 7px;
  }

  input[type="submit"] {
    background-color: rgb(12, 88, 159);
    color: white;
    border: none;
    padding: 7px 10px 7px 10px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  .margin {
    margin-bottom: 15px;
  }
`;

import styled from "styled-components";

export const StyledQuestionContainer = styled.div`
  width: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  p {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .correct {
    background-color:rgb(139, 191, 138);
    color: white;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 10px;
      margin-bottom: 5px;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #ececec;
      }
    }
  }
`;

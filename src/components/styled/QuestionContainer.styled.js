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

      &.selected {
        background-color: #d3d3d3; /* Ensures selected stays visible */
        border-color: #bbb; /* Optional: make it more distinct */
      }
    }
  }
`;

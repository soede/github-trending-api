import React from "react";
import styled from "@emotion/styled";

const StyledInputField = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 16px;
  margin-right: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const InputField = ({ search, setSearch }) => {
  return (
    <StyledInputField
      type="text"
      placeholder="Search your repos"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default InputField;

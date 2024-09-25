import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import InputField from "../InputField/InputField";

const StyledSearchContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1e1e1e;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const SearchContainer = ({ search, setSearch }) => {
  return (
    <StyledSearchContainer>
      <InputField search={search} setSearch={setSearch} />
      <IconButton style={{ color: "#fff" }}>
        <SearchIcon />
      </IconButton>
    </StyledSearchContainer>
  );
};

export default SearchContainer;

import React from "react";
import ResultCard from "../ResultCard/ResultCard";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StyledCardList = styled(Box)`
  flex-grow: 1;
  overflow-y: auto;
  width: 96%;
  max-height: calc(70vh - 50px);
  / @media (max-width: 768px) {
    padding: 10px;
  }
`;

const CardList = ({ posts }) => {
  return (
    <StyledCardList>
      {posts.map((result, index) => (
        <ResultCard
          index={index}
          name={result.name}
          stars={result.stars}
          link={result.url}
        />
      ))}
    </StyledCardList>
  );
};

export default CardList;

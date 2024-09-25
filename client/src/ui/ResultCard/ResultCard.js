import React from "react";
import { Typography } from "@mui/material";
import { starsFormatted } from "../../core/utlis/starsFormatted";
import { StyledResultCard } from "./StyledResultCard";

const ResultCard = ({ index, name, stars, link }) => {
  return (
    <StyledResultCard
      key={index}
      onClick={() => {
        window.open(link, "_blank");
      }}
    >
      <Typography
        variant="body1"
        maxWidth={240}
      >{`#${index + 1} ${name}`}</Typography>
      <Typography variant="body2" color="yellow">
        {starsFormatted(stars)}
      </Typography>
    </StyledResultCard>
  );
};

export default ResultCard;

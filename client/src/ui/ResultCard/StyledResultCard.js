import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledResultCard = styled(Box)`
  background-color: #242424;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  max-width: 350px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

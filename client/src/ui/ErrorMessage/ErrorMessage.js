import React from "react";
import { Typography, Box } from "@mui/material";

const ErrorMessage = ({ message }) => {
  return (
    <Box sx={{ textAlign: "center", marginTop: "20px" }}>
      <Typography variant="h6" color="error">
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;

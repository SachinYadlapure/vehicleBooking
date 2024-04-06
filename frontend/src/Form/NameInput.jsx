import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function NameInput() {
  return (
    <Box>
      <Box mb={2}>
        <TextField
          id="firstName"
          label="First Name"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box mb={2}>
        <TextField
          id="lastName"
          label="Last Name"
          variant="outlined"
          fullWidth
        />
      </Box>
    </Box>
  );
}

export default NameInput;

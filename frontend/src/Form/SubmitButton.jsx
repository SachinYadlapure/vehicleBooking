import { Button } from "@mui/material";
import React from "react";

function SubmitButton({ onSubmit }) {
  return (
    <div>
      <Button size="large" onClick={onSubmit} variant="contained" href="#contained-buttons">
        Submit
      </Button>
    </div>
  );
}

export default SubmitButton;

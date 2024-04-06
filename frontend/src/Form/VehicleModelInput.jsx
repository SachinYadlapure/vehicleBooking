import * as React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Chip,
  Typography,
} from "@mui/material";

const models = ["Model A", "Model B", "Model C"];

function getStyles(name, personName) {
  return {
    fontWeight: personName.indexOf(name) === -1 ? "normal" : "bold",
  };
}

function VehicleModelInput({ vehicleModels }) {
  const [selectedModels, setSelectedModels] = React.useState([]);

  const handleChange = (event) => {
    setSelectedModels(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        Vehicle Model
      </Typography>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">
          Select Vehicle Model
        </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedModels}
          onChange={handleChange}
          renderValue={(selected) => (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </div>
          )}
        >
          {models.map((model) => (
            <MenuItem
              key={model}
              value={model}
              style={getStyles(model, selectedModels)}
            >
              {model}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default VehicleModelInput;

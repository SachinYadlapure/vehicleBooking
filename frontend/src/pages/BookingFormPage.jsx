import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import NameInput from "../Form/NameInput";
import NumberOfWheelsInput from "../Form/NumberOfWheelsInput";
import VehicleTypeInput from "../Form/VehicleTypeInput";
import VehicleModelInput from "../Form/VehicleModelInput";
import DateRangePicker from "../Form/DateRangePickerComponent";
import SubmitButton from "../Form/SubmitButton";
import axios from "axios";

function BookingFormPage() {
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [vehicleModels, setVehicleModels] = useState([]);

  useEffect(() => {
    fetchVehicleTypes();
  }, []);

  const fetchVehicleTypes = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/vehicles/types"
      );
      setVehicleTypes(response.data);
    } catch (error) {
      console.error("Error fetching vehicle types:", error);
    }
  };

  const fetchVehicleModels = async (type) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/vehicles/${type}/models`
      );
      setVehicleModels(response.data);
    } catch (error) {
      console.error(`Error fetching vehicle models for type ${type}:`, error);
    }
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justify="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Typography variant="h4" gutterBottom>
          Vehicle Booking Form
        </Typography>
      </Grid>
      <Grid item>
        <form>
          <NameInput />
          <NumberOfWheelsInput />
          <VehicleTypeInput
            vehicleTypes={vehicleTypes}
            fetchVehicleModels={fetchVehicleModels}
          />
          <VehicleModelInput vehicleModels={vehicleModels} />
          <DateRangePicker />
          <SubmitButton />
        </form>
      </Grid>
    </Grid>
  );
}

export default BookingFormPage;

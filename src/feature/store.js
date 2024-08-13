import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./car/carsSlice";
import formReducer from "./form/formSlice";

export default configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "../src/features/character/characterSlice";
import controlsReducer from "../src/features/controls/controlsSlice";
export const store = configureStore({
  reducer: {
    character: characterReducer,
    controls: controlsReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "../reducers/CardReducer";

const store = configureStore({
  reducer: {
    card: CardReducer,
  },
});

export default store;

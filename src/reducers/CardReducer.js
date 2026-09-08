import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

const cardStackSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCardStack: (state, action) => {
      state.cards.push(action.payload);
    },
  },
});

export const { addToCardStack } = cardStackSlice.actions;

export default cardStackSlice.reducer;

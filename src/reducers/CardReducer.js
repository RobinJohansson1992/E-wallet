import { createSlice } from "@reduxjs/toolkit";

// redux is used to store all cards and which card is 'active'
// the information is shared between AddCard and AllCards.
const initialState = {
  cards: [],
  activeCard: null,
};

const cardStackSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCardStack: (state, action) => {
      state.cards.push(action.payload);
    },
    setActiveCard: (state, action) => {
      state.activeCard = action.payload;
    },
  },
});

export const { addToCardStack, setActiveCard } = cardStackSlice.actions;

export default cardStackSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  currency: string;
}

const initialState: InitialState = {
  currency: "usd",
};

const currency = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency(state, action: PayloadAction<string>) {
      state.currency = action.payload;
    },
  },
});

export const { setCurrency } = currency.actions;
export default currency.reducer;

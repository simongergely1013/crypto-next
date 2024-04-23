import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  currencySell: string;
  currencyBuy: string;
  sellAmount: string | number;
  buyAmount: string | number;
  duration: string;
}

const initialState: InitialState = {
  currencySell: "usd",
  currencyBuy: "btc",
  sellAmount: "",
  buyAmount: "",
  duration: "1D",
};

const convertor = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrencySell(state, action: PayloadAction<string>) {
      state.currencySell = action.payload;
    },
    setCurrencyBuy(state, action: PayloadAction<string>) {
      state.currencyBuy = action.payload;
    },
    setSellAmount(state, action: PayloadAction<string | number>) {
      state.sellAmount = action.payload;
      state.buyAmount = "";
    },
    setBuyAmount(state, action: PayloadAction<string | number>) {
      state.buyAmount = action.payload;
      state.sellAmount = "";
    },
    setDuration(state, action: PayloadAction<string>) {
      state.duration = action.payload;
    },
  },
});

export const {
  setCurrencySell,
  setCurrencyBuy,
  setSellAmount,
  setBuyAmount,
  setDuration,
} = convertor.actions;
export default convertor.reducer;

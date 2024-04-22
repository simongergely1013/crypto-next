import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  currencySell: string;
  currencyBuy: string;
  sellAmount: string | number;
  buyAmount: string | number;
}

const initialState: InitialState = {
  currencySell: "usd",
  currencyBuy: "btc",
  sellAmount: "",
  buyAmount: "",
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
    },
    setBuyAmount(state, action: PayloadAction<string | number>) {
      state.buyAmount = action.payload;
    },
  },
});

export const { setCurrencySell, setCurrencyBuy, setSellAmount, setBuyAmount } =
  convertor.actions;
export default convertor.reducer;

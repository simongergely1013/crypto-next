import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  currencySell: string;
  currencyBuy: string;
  sellAmount: string | number;
  buyAmount: string | number;
  currencyBuyVsCurrencySell: number;
  currencySellVsCurrencyBuy: number;
  duration: string;
}

const initialState: InitialState = {
  currencySell: "usd",
  currencyBuy: "btc",
  sellAmount: "",
  buyAmount: "",
  currencyBuyVsCurrencySell: 0,
  currencySellVsCurrencyBuy: 0,
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
    setCurrencyBuyVsCurrencySell(state, action: PayloadAction<number>) {
      state.currencyBuyVsCurrencySell = action.payload;
    },
    setCurrencySellVsCurrencyBuy(state, action: PayloadAction<number>) {
      state.currencySellVsCurrencyBuy = action.payload;
    },
  },
});

export const {
  setCurrencySell,
  setCurrencyBuy,
  setSellAmount,
  setBuyAmount,
  setDuration,
  setCurrencyBuyVsCurrencySell,
  setCurrencySellVsCurrencyBuy,
} = convertor.actions;
export default convertor.reducer;

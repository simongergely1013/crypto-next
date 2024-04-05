import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  duration: string;
}

const initialState: InitialState = {
  duration: "1D",
};

const btcChartsDuration = createSlice({
  name: "btcChartsDuration",
  initialState,
  reducers: {
    setDuration(state, action: PayloadAction<string>) {
      state.duration = action.payload;
    },
  },
});

export const { setDuration } = btcChartsDuration.actions;
export default btcChartsDuration.reducer;

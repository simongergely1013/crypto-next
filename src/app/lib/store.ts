import { configureStore } from "@reduxjs/toolkit";
import theme from "./features/app/themeSlice";
import btcChartDuration from "./features/app/btcChartDurationSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme,
      btcChartDuration,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

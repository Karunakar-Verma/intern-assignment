import { configureStore } from "@reduxjs/toolkit";
// import stocksReducer from "./Features/stocksSlice";
import stocksReducer from "./Features/stockSlice"
import stockDataReducer from "./Features/stockDataSlice";

export const store = configureStore({
  reducer: {
    stocks: stocksReducer,
    stockData: stockDataReducer,
  },
});

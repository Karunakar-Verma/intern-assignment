import { configureStore } from "@reduxjs/toolkit";
import stocksReducer from "../Slice/stockSlice"
const store = configureStore({
  reducer: {
    stocks: stocksReducer,
  },
});

export default store;
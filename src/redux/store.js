import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./boardsSlice";

const store = configureStore({
  reducer: {
    //redux slices
    boards: boardSlice.reducer,
  },
});

export default store;

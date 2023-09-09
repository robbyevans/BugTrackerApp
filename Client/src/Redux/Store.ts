import { configureStore } from "@reduxjs/toolkit";
import reducer from "./RootReducer";

const store = configureStore({
  reducer: reducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

import { configureStore } from "@reduxjs/toolkit";
import reducer from "./RootReducer";

export default function () {
  return configureStore({
    reducer,
  });
}

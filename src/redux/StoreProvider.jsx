"use client";
// import { store } from "@/src/redux/store";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
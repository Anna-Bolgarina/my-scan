import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/app";
import accountSlice from './slices/account';
import histograms from "./slices/histograms";

export default configureStore({
  reducer: {
    app: appSlice,
    account:accountSlice,
    histograms
  },
});

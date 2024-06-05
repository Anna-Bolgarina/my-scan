import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import accountInfoFetch from "../../API/accountInfo";
import accountAuthorizationFetch from "../../API/accountAuthorization";

export const getCompanyInfo = createAsyncThunk("getCompanyInfo", async () => {
  const data = await accountInfoFetch();
  return data;
});

export const enter = createAsyncThunk("enter", async (data, thunk) => {
  const accountResponse = await accountAuthorizationFetch(data);
  
  localStorage.setItem("accessToken", accountResponse.accessToken);
  thunk.dispatch(getCompanyInfo());
  return accountResponse;
});

export const account = createSlice({
  name: "account",
  initialState: {
    companyInfo: null,
    accountInfo: null,
    status: "",
  },
  reducers: {
    exit: (state) => {
      state.accountInfo = null;
      state.companyInfo = null;
      localStorage.removeItem("accessToken");
    },
    dropStatus: (state) => {
      state.status = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(enter.pending, (state) => {
        state.status = "pending";
      })
      .addCase(enter.fulfilled, (state, action) => {
        state.accountInfo = action.payload;
        state.status = "done";
      })
      .addCase(getCompanyInfo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getCompanyInfo.fulfilled, (state, action) => {
        state.companyInfo = action.payload;
        state.status = "done";
      })
      .addCase(enter.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { exit, dropStatus } = account.actions;
export default account.reducer;

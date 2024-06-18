import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  currentThunk,
  logoutThunk,
  refreshTokensThunk,
  signInThunk,
  signUpThunk,
} from "../auth/operations";
import {
  addBookFromRecommendThunk,
  addBookThunk,
  deleteUserBook,
  getBookInfo,
  getUserBooksThunk,
  recommendedBooksThunk,
  saveFinishPage,
  saveStartPage,
} from "../books/operations";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          signUpThunk.pending,
          signInThunk.pending,
          currentThunk.pending,
          logoutThunk.pending,
          refreshTokensThunk.pending,
          addBookFromRecommendThunk.pending,
          addBookThunk.pending,
          deleteUserBook.pending,
          getBookInfo.pending,
          getUserBooksThunk.pending,
          recommendedBooksThunk.pending,
          saveFinishPage.pending,
          saveStartPage.pending
        ),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          signUpThunk.fulfilled,
          signInThunk.fulfilled,
          currentThunk.fulfilled,
          logoutThunk.fulfilled,
          refreshTokensThunk.fulfilled,
          addBookFromRecommendThunk.fulfilled,
          addBookThunk.fulfilled,
          deleteUserBook.fulfilled,
          getBookInfo.fulfilled,
          getUserBooksThunk.fulfilled,
          recommendedBooksThunk.fulfilled,
          saveFinishPage.fulfilled,
          saveStartPage.fulfilled
        ),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          signUpThunk.rejected,
          signInThunk.rejected,
          currentThunk.rejected,
          logoutThunk.rejected,
          refreshTokensThunk.rejected,
          addBookFromRecommendThunk.rejected,
          addBookThunk.rejected,
          deleteUserBook.rejected,
          getBookInfo.rejected,
          getUserBooksThunk.rejected,
          recommendedBooksThunk.rejected,
          saveFinishPage.rejected,
          saveStartPage.rejected
        ),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const loadingReducer = loadingSlice.reducer;

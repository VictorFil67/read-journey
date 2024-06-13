import { createSlice } from "@reduxjs/toolkit";
import {
  addBookThunk,
  deleteUserBook,
  getBookInfo,
  getUserBooks,
  recommendedBooksThunk,
} from "./operations";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    recommendedBooks: [],
    userBooks: [],
    filteredUserBooks: [],
    bookInfo: null,
    isLoading: false,
    error: null,
    path: null,
    option: null,
  },
  reducers: {
    setPath(state, { payload }) {
      state.path = payload;
    },
    getfilteredUserBooks(state, { payload }) {
      if (state.userBooks.length !== 0) {
        if (payload === "all-books") {
          console.log(payload);
          state.filteredUserBooks = state.userBooks;
        } else {
          state.filteredUserBooks = state.userBooks.filter(
            (book) => book.status === payload
          );
        }
      }
    },
    setOption(state, { payload }) {
      state.option = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(recommendedBooksThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(recommendedBooksThunk.fulfilled, (state, { payload }) => {
        state.recommendedBooks = payload.results;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(recommendedBooksThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addBookThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBookThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addBookThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getUserBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserBooks.fulfilled, (state, { payload }) => {
        state.userBooks = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUserBooks.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteUserBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteUserBook.fulfilled, (state, { payload }) => {
        state.userBooks = state.userBooks.filter(
          (book) => book._id !== payload.id
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteUserBook.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getBookInfo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBookInfo.fulfilled, (state, { payload }) => {
        state.bookInfo = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getBookInfo.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const booksReducer = booksSlice.reducer;
export const { setPath, getfilteredUserBooks, setOption } = booksSlice.actions;

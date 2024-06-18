import { createSlice } from "@reduxjs/toolkit";
import {
  addBookFromRecommendThunk,
  addBookThunk,
  deleteUserBook,
  getBookInfo,
  getUserBooksThunk,
  recommendedBooksThunk,
  saveFinishPage,
  saveStartPage,
} from "./operations";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    recommendedBooks: [],
    totalPages: 0,
    requestData: {
      title: "",
      author: "",
      page: 1,
      limit: 10,
    },
    prevUserBooks: [],
    userBooks: [],
    filteredUserBooks: [],
    bookInfo: {},
    isLoading: false,
    error: null,
    prevPath: null,
    path: null,
    option: null,
  },
  reducers: {
    setPath(state, { payload }) {
      state.prevPath === state.path;
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
    setLimit(state, { payload }) {
      state.requestData.limit = payload;
    },
    changePage(state, { payload }) {
      state.requestData.page = state.requestData.page + payload;
    },
    setRequestData(state, { payload }) {
      state.requestData.page = 1;
      state.requestData.title = payload.title;
      state.requestData.author = payload.author;
    },
    setBookId(state, { payload }) {
      state.bookInfo._id = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(recommendedBooksThunk.pending, (state) => {
        // state.isLoading = true;
        state.error = null;
      })
      .addCase(recommendedBooksThunk.fulfilled, (state, { payload }) => {
        state.recommendedBooks = payload.results;
        state.totalPages = payload.totalPages;
        // state.isLoading = false;
        state.error = null;
      })
      .addCase(recommendedBooksThunk.rejected, (state, { payload }) => {
        // state.isLoading = false;
        state.error = payload;
      })
      .addCase(addBookThunk.pending, (state) => {
        // state.isLoading = true;
        state.error = null;
      })
      .addCase(addBookThunk.fulfilled, (state) => {
        // state.isLoading = false;
        state.error = null;
      })
      .addCase(addBookThunk.rejected, (state, { payload }) => {
        // state.isLoading = false;
        state.error = payload;
      })
      .addCase(addBookFromRecommendThunk.pending, (state) => {
        // state.isLoading = true;
        state.error = null;
      })
      .addCase(addBookFromRecommendThunk.fulfilled, (state) => {
        // state.isLoading = false;
        state.error = null;
      })
      .addCase(addBookFromRecommendThunk.rejected, (state, { payload }) => {
        // state.isLoading = false;
        state.error = payload;
      })
      .addCase(getUserBooksThunk.pending, (state) => {
        // state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserBooksThunk.fulfilled, (state, { payload }) => {
        state.prevUserBooks = state.userBooks;
        state.userBooks = payload;
        // state.isLoading = false;
        state.error = null;
      })
      .addCase(getUserBooksThunk.rejected, (state, { payload }) => {
        // state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteUserBook.pending, (state) => {
        // state.isLoading = true;
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
        // state.isLoading = false;
        state.error = payload;
      })
      .addCase(getBookInfo.pending, (state) => {
        // state.isLoading = true;
        state.error = null;
      })
      .addCase(getBookInfo.fulfilled, (state, { payload }) => {
        state.bookInfo = payload;
        // state.isLoading = false;
        state.error = null;
      })
      .addCase(getBookInfo.rejected, (state, { payload }) => {
        // state.isLoading = false;
        state.error = payload;
      })
      .addCase(saveStartPage.pending, (state) => {
        // state.isLoading = true;
        state.error = null;
      })
      .addCase(saveStartPage.fulfilled, (state, { payload }) => {
        state.bookInfo = payload;
        // state.isLoading = false;
        state.error = null;
      })
      .addCase(saveStartPage.rejected, (state, { payload }) => {
        // state.isLoading = false;
        state.error = payload;
      })
      .addCase(saveFinishPage.pending, (state) => {
        // state.isLoading = true;
        state.error = null;
      })
      .addCase(saveFinishPage.fulfilled, (state, { payload }) => {
        state.bookInfo = payload;
        // state.isLoading = false;
        state.error = null;
      })
      .addCase(saveFinishPage.rejected, (state, { payload }) => {
        // state.isLoading = false;
        state.error = payload;
      });
  },
});

export const booksReducer = booksSlice.reducer;
export const {
  setPath,
  getfilteredUserBooks,
  setOption,
  setLimit,
  changePage,
  setRequestData,
  setBookId,
} = booksSlice.actions;

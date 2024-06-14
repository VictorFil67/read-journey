import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const recommendedBooksThunk = createAsyncThunk(
  "books/recommend",
  async ({ title = "", author = "", page = 1, limit = 10 }, thunkAPI) => {
    try {
      const { data } = await api("/books/recommend", {
        params: { title, author, page, limit },
      });
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);

export const addBookThunk = createAsyncThunk(
  "books/add",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("books/add", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);

export const getUserBooks = createAsyncThunk(
  "books/own",
  async (_, thunkAPI) => {
    try {
      // const config = status ? { params: { status } } : {};
      const { data } = await api("/books/own");
      return data;
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteUserBook = createAsyncThunk(
  "books/removeBook",
  async (id, thunkAPI) => {
    try {
      const { data } = await api.delete(`/books/remove/${id}`);
      // console.log("data", data);
      return data;
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getBookInfo = createAsyncThunk(
  "books/bookInfo",
  async (id, thunkAPI) => {
    try {
      const { data } = await api.get(`/books/${id}`);
      console.log("data", data);
      return data;
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

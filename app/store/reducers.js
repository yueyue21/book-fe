import { createReducer } from "@reduxjs/toolkit";
import { createBook, updateBook, deleteBook } from "./actions";

const initialState = [];

const booksReducer = createReducer(initialState, {
  [createBook]: (state, action) => {
    state.push(action.payload);
  },
  [updateBook]: (state, action) => {
    const bookIndex = state.findIndex((book) => book.id === action.payload.id);
    if (bookIndex !== -1) {
      state[bookIndex] = action.payload;
    }
  },
  [deleteBook]: (state, action) => {
    return state.filter((book) => book.id !== action.payload);
  },
});

export default booksReducer;

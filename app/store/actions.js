import { createAction } from '@reduxjs/toolkit';

export const createBook = createAction('books/create');
export const updateBook = createAction('books/update');
export const deleteBook = createAction('books/delete');

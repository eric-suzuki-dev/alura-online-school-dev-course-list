import { configureStore } from '@reduxjs/toolkit';
import { booksSlice } from './reducers/books';
import { cartSlice } from './reducers/cart';

export const store = configureStore({
	reducer: {
		books: booksSlice.reducer,
		cart: cartSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

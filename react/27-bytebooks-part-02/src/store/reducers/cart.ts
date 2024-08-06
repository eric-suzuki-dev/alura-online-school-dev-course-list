import { createSlice } from '@reduxjs/toolkit';
import { Book } from './books';

export type CartBook = Book & { quantity: number; price: number };

export interface CartState {
	books: CartBook[];
	isCartOpen: boolean;
}

const initialState: CartState = {
	books: [],
	isCartOpen: false,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setIsCartOpen: (state, action) => {
			state.isCartOpen = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function

export const { setIsCartOpen } = cartSlice.actions;

export default cartSlice.reducer;

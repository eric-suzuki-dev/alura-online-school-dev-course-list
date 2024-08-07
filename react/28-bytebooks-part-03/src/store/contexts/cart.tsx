/* eslint-disable no-case-declarations */
import React, { createContext, useContext, useMemo, useReducer } from 'react';

export type Book = {
	id: number;
	title: string;
	image: string;
	author: string;
	shortDescription: string;
	fullDescription: string;
	prices: {
		ebook: number;
		paper: number;
	};
};

export type CartBook = Book & { quantity: number; price: number };

export interface CartState {
	books: CartBook[];
	isCartOpen: boolean;
	cartTotal: string;
}

interface CartContextProps {
	state: CartState;
	actions: {
		setIsCartOpen: (isOpen: boolean) => void;
		addToCart: (book: CartBook) => void;
		removeBook: (book: CartBook) => void;
		changeQuantity: (book: CartBook, quantity: number) => void;
		resetCart: () => void;
	};
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cartReducer = (state: CartState, action: { type: string; payload?: any }): CartState => {
	switch (action.type) {
		case 'SET_IS_CART_OPEN':
			return { ...state, isCartOpen: action.payload };
		case 'ADD_TO_CART':
			const isBookInCart = state.books.find((book) => book.id === action.payload.id);
			if (isBookInCart) {
				const newBooks = state.books.map((book) => {
					if (book.id === action.payload.id) {
						return { ...book, quantity: book.quantity + action.payload.quantity };
					}
					return book;
				});
				return { ...state, books: newBooks };
			}
			return { ...state, books: [...state.books, action.payload] };
		case 'REMOVE_BOOK':
			const newBook = state.books.filter((book) => book.id !== action.payload.id);
			return { ...state, books: newBook };
		case 'CHANGE_QUANTITY':
			const newBooks = state.books.map((book) => {
				if (book.id === action.payload.id) {
					return { ...book, quantity: action.payload.quantity };
				}
				return book;
			});
			return { ...state, books: newBooks };
		case 'RESET_CART':
			return { ...state, books: [] };
		default:
			return state;
	}
};

const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, {
		books: [],
		isCartOpen: false,
		cartTotal: '',
	});

	state.cartTotal = useMemo(() => {
		return state.books.reduce((sum, book) => sum + book.price * book.quantity, 0).toFixed(2);
	}, [state.books]);

	const actions = {
		setIsCartOpen: (isOpen: boolean) => dispatch({ type: 'SET_IS_CART_OPEN', payload: isOpen }),
		addToCart: (book: CartBook) => dispatch({ type: 'ADD_TO_CART', payload: book }),
		removeBook: (book: CartBook) => dispatch({ type: 'REMOVE_BOOK', payload: book }),
		changeQuantity: (book: CartBook, quantity: number) =>
			dispatch({ type: 'CHANGE_QUANTITY', payload: { ...book, quantity } }),
		resetCart: () => dispatch({ type: 'RESET_CART' }),
	};

	return <CartContext.Provider value={{ state, actions }}>{children}</CartContext.Provider>;
};

const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { CartProvider, useCart };

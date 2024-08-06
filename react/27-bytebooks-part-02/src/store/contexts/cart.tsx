import React, { createContext, useContext, useReducer } from 'react';

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
}

interface CartContextProps {
	state: CartState;
	actions: {
		setIsCartOpen: (isOpen: boolean) => void;
	};
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cartReducer = (state: CartState, action: { type: string; payload?: any }): CartState => {
	switch (action.type) {
		case 'SET_IS_CART_OPEN':
			return { ...state, isCartOpen: action.payload };
		default:
			return state;
	}
};

const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, {
		books: [],
		isCartOpen: false,
	});

	const actions = {
		setIsCartOpen: (isOpen: boolean) => dispatch({ type: 'SET_IS_CART_OPEN', payload: isOpen }),
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
import React, { createContext, useContext, useEffect, useState } from 'react';
import sleep from 'sleep-promise';

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

interface BooksState {
	books: Book[];
	filteredBooks?: Book[];
	isLoading?: boolean;
	selectedBook?: Book;
}

interface BooksContextProps {
	state: BooksState;
	actions: {
		filterItems: (value: string) => void;
		clearSelectedBook: () => void;
		setSelectedBook: (book: Book) => void;
		fetchBooks: () => void;
	};
}

const BooksContext = createContext<BooksContextProps | undefined>(undefined);

const BooksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [state, setState] = useState<BooksState>({
		books: [],
	});

	const filterItems = (value: string) => {
		setState((prev) => ({
			...prev,
			filteredBooks: prev.books.filter((item) =>
				item.title.toLowerCase().includes(value.toLowerCase())
			),
		}));
	};

	const clearSelectedBook = () => {
		setState((prev) => ({
			...prev,
			selectedBook: undefined,
		}));
	};

	const setSelectedBook = (book: Book) => {
		setState((prev) => ({
			...prev,
			selectedBook: book,
		}));
	};

	const fetchBooks = async () => {
		setState((prev) => ({
			...prev,
			isLoading: true,
		}));

		try {
			const response: Book[] = await fetch(
				'https://raw.githubusercontent.com/cicatriz-dev/bytebooks-assets/main/data.json'
			).then((res) => res.json());

			await sleep(1500);

			setState({
				books: response,
				isLoading: false,
			});
		} catch (error) {
			setState((prev) => ({
				...prev,
				isLoading: false,
			}));
		}
	};

	useEffect(() => {
		fetchBooks();
	}, []);

	const contextValue: BooksContextProps = {
		state,
		actions: {
			filterItems,
			clearSelectedBook,
			setSelectedBook,
			fetchBooks,
		},
	};

	return <BooksContext.Provider value={contextValue}>{children}</BooksContext.Provider>;
};

const useBooks = () => {
	const context = useContext(BooksContext);
	if (!context) {
		throw new Error('useBooks must be used within a BooksProvider');
	}
	return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { BooksProvider, useBooks };

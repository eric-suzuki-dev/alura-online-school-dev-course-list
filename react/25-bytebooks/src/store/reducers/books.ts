import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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

export interface BooksState {
	books: Book[];
	filteredBooks?: Book[];
	isLoading?: boolean;
	selectedBook?: Book;
}

const initialState: BooksState = {
	books: [],
};

const fetchBooks = createAsyncThunk('books/fetchItems', async () => {
	const response: Book[] = await fetch(
		'https://raw.githubusercontent.com/alura-cursos/bytebooks-assets/main/data.json'
	)
		.then((res) => res.json())
		.then(sleep(1500));
	return response;
});

export const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		filterItems: (state, action) => {
			state.filteredBooks = state.books.filter((item) =>
				item.title.toLowerCase().includes(action.payload.toLowerCase())
			);
		},
		getBookById: (state, action) => {
			state.selectedBook = state.books.find((item) => item.id === action.payload);
		},
		clearSelectedBook: (state) => {
			state.selectedBook = undefined;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchBooks.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchBooks.rejected, (state) => {
			state.isLoading = false;
		});
		builder.addCase(fetchBooks.fulfilled, (state, action) => {
			state.isLoading = false;
			state.books = action.payload;
		});
	},
});

// Action creators are generated for each case reducer function

export const { filterItems } = booksSlice.actions;

export { fetchBooks };

export default booksSlice.reducer;

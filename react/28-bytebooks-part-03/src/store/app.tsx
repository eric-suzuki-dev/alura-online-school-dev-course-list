import { BooksProvider } from './contexts/books';
import { CartProvider } from './contexts/cart';

export const AppContext = ({ children }: { children: React.ReactNode }) => (
	<BooksProvider>
		<CartProvider>{children}</CartProvider>
	</BooksProvider>
);

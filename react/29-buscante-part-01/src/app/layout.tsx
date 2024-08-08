import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import { BooksProvider } from '@/context/books';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'], style: 'normal' });

export const metadata: Metadata = {
	title: 'Buscante',
	description: 'Sua estante virtual de livros',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pt-BR'>
			<body className={poppins.className}>
				<BooksProvider>
					<Header />
					{children}
				</BooksProvider>
			</body>
		</html>
	);
}

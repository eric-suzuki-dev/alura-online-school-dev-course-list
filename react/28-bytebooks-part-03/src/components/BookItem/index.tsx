import { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { Book, useBooks } from '../../store/contexts/books';

type BookItemProps = { book: Book };

const BookItemComponent: React.FC<BookItemProps> = ({ book }) => {
	const navigation = useHistory();
	const {
		actions: { setSelectedBook },
	} = useBooks();

	return (
		<div
			className='flex flex-col items-start justify-center w-[246px] m-4 cursor-pointer'
			onClick={() => {
				setSelectedBook(book);
				navigation.push(`/book/${book.id}`);
			}}
		>
			<img src={book.image} alt={book.title} loading='lazy' className='hover:shadow-lg' />
			<div className='flex flex-col'>
				<h3 className='text-lg text-[#002F52] font-bold text-left my-2'>{book.title}</h3>
				<p className='text-sm text-[#221F20]'>Por: {book.author}</p>
			</div>
		</div>
	);
};

const BookItem = memo(BookItemComponent);
export default BookItem;

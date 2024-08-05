import { memo } from 'react';
import { Book } from '../../store/reducers/books';

type BookItemProps = {
	book: Book;
};

const BookItemComponent: React.FC<BookItemProps> = ({ book }) => {
	return (
		<div className='flex flex-col items-start justify-center w-[246px] m-4'>
			<img src={book.image} alt={book.title} />
			<div className='flex flex-col'>
				<h3 className='text-lg text-[#002F52] font-bold text-left my-2'>{book.title}</h3>
				<p className='text-sm text-[#221F20]'>Por: {book.author}</p>
			</div>
		</div>
	);
};

const BookItem = memo(BookItemComponent);
export default BookItem;
import { Book } from '../../store/reducers/books';
import BookItem from '../BookItem';

const BooksList = ({ items }: { items: Book[] }) => (
	<>
		{items.map((item) => (
			<BookItem key={item.id} book={item} />
		))}
	</>
);

export default BooksList;

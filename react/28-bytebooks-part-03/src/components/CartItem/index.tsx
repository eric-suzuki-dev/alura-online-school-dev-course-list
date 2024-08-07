import { memo } from 'react';
import { MdAddCircle, MdDelete, MdOutlineRemoveCircle } from 'react-icons/md';
import { CartBook, useCart } from '../../store/contexts/cart';

type CartItemProps = {
	book: CartBook;
};

const CartItemComponent: React.FC<CartItemProps> = ({ book }) => {
	const {
		actions: { changeQuantity, removeBook },
	} = useCart();
	return (
		<div className='flex items-start mt-2 pb-4 border-b border-[#002F52]'>
			<img src={book.image} className='w-28 shadow-lg' />
			<div className='flex-col w-full'>
				<p className='mx-4 text-xl text-[#002F52]'>{book.title}</p>
				<div className='flex m-4 justify-between mt-10 items-center max-w-lg w-full'>
					<div className=''>
						<p className='text-base'>Preço</p>
						<p className='text-lg text-[#002F52] font-bold'>R${Number(book.price).toFixed(2)}</p>
					</div>
					<div className='flex-row items-center '>
						<p className='text-base text-center'>Quantidade</p>
						<div className='flex items-center'>
							<button onClick={() => changeQuantity(book, book.quantity - 1)}>
								<MdOutlineRemoveCircle className='text-[#002F52] h-8 w-8' />
							</button>
							<p className='mx-4'>{book.quantity}</p>
							<button onClick={() => changeQuantity(book, book.quantity + 1)}>
								<MdAddCircle className='text-[#002F52] h-8 w-8' />
							</button>
						</div>
					</div>
					<button onClick={() => removeBook(book)}>
						<MdDelete className='w-6 h-6 text-[#002F52] mt-2 md:mt-0 hover:opacity-80 cursor-pointer' />
					</button>
				</div>
			</div>
		</div>
	);
};

const CartItem = memo(CartItemComponent);
export default CartItem;

import { MdOutlineShoppingBag } from 'react-icons/md';

import Cart from '../Cart';
import { memo } from 'react';
import { useCart } from '../../store/contexts/cart';

const HeaderComponent: React.FC = () => {
	const {
		state: { isCartOpen },
		actions: { setIsCartOpen },
	} = useCart();
	return (
		<>
			<div className='flex items-center bg-white h-20 px-10 w-full py-[18px] justify-between'>
				<img alt='ByteBooks Logo' src='./logo.webp' height={70} />
				<div
					className='flex items-center hover:opacity-80 cursor-pointer'
					onClick={() => setIsCartOpen(true)}
				>
					<MdOutlineShoppingBag className='h-9 w-9 text-[#002F52]' />
					<div className='text-[#221F20] text-lg font-bold pt-2 pl-1 hidden md:block'>Sacola</div>
				</div>
			</div>
			{isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
		</>
	);
};

const Header = memo(HeaderComponent);
export default Header;

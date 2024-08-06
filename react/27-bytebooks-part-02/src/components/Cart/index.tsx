import { MdClose } from 'react-icons/md';

type CartProps = {
	onClose: () => void;
};

const Cart: React.FC<CartProps> = ({ onClose }) => {
	return (
		<div className='relative z-10'>
			<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
			<div className='fixed inset-0 overflow-hidden'>
				<div className='absolute inset-0 overflow-hidden'>
					<div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
						<div className='pointer-events-auto relative w-screen max-w-3xl'>
							<div className='flex h-full flex-col bg-white shadow-xl'>
								<div className='bg-[#002F52] h-20 flex items-center px-20 justify-between'>
									<h1 className='text-3xl leading-6 text-white pr-5' id='slide-over-title'>
										Minha Sacola
									</h1>
									<MdClose
										className='h-7 w-7 text-white cursor-pointer hover:opacity-80'
										onClick={onClose}
									/>
								</div>
								<div className='relative mt-6 flex-1 px-4 sm:px-6'>
									{/* Conteúdo do carrinho */}
									<p>Seu carrinho está vazio :(</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;

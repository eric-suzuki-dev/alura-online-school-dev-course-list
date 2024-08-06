import { useSelector } from 'react-redux';
import PageSection from '../../components/PageSection';
import { RootState } from '../../store/store';
import { MdAddCircle, MdOutlineRemoveCircle } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';

const BookDetail = () => {
	const navigate = useHistory();
	const { selectedBook } = useSelector((state: RootState) => state.books);
	const [quantity, setQuantity] = useState(1);
	const quantityWithZero = quantity < 10 ? `0${quantity}` : quantity;

	return (
		<div>
			<PageSection>
				<h1 className='text-2xl md:text-4xl text-white font-bold my-5'>Detalhes do Livro</h1>
			</PageSection>
			<Breadcrumb onReturnHome={() => navigate.push('/')} currentPageName='Detalhes do livro' />
			<div className='mt-20 px-8 md:px-20 xl:px-80 w-full pb-10'>
				<div className='flex flex-col md:flex-row items-center md:items-start'>
					<img src={selectedBook?.image} alt={selectedBook?.title} className='w-80' />
					<div className='mx-5 mt-4 md:mt-0'>
						<h2 className='text-[#002F52] text-3xl'>{selectedBook?.title}</h2>
						<p className='text-black mt-2 text-base'>{selectedBook?.shortDescription}</p>
						<p className='text-black mt-4 text-base'>Por: {selectedBook?.author}</p>
						<div className='flex items-center mt-4'>
							<h3 className='text-[#002F52] text-xl mr-4'>Quantidade</h3>
							<button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>
								<MdOutlineRemoveCircle
									className={`${quantity === 1 ? 'text-gray-300' : 'text-[#002F52]'} h-8 w-8`}
								/>
							</button>
							<p className='mx-4'>{quantityWithZero}</p>
							<button onClick={() => setQuantity(quantity + 1)}>
								<MdAddCircle className='text-[#002F52] h-8 w-8' />
							</button>
						</div>
						<div className='mt-6'>
							<button
								className='bg-[#EB9B00] w-full md:w-36 hover:opacity-60'
								onClick={() => console.log('Adicionando item no carrinho')}
							>
								<p className='text-white text-xl font-bold p-4'>Comprar</p>
							</button>
						</div>
					</div>
				</div>
				<div>
					<h3 className='text-[#002F52] text-2xl mt-10 font-semibold border-b-2 border-b-[#EB9B00] w-fit'>
						Sobre o livro
					</h3>
					<p className='text-[#221F20] text-base mt-4'>{selectedBook?.fullDescription}</p>
				</div>
			</div>
		</div>
	);
};

export default BookDetail;

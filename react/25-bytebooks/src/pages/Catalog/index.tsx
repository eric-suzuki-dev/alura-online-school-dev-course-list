import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import PageContent from '../../components/PageContent';
import PageSection from '../../components/PageSection';
import React, { useEffect } from 'react';
import { fetchBooks, filterItems } from '../../store/reducers/books';
import { AppDispatch, RootState } from '../../store/store';
import { Footer } from '../../components/Footer';

const Catalog: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [filterInput, setFilterInput] = React.useState('');
	const { books, filteredBooks, isLoading } = useSelector((state: RootState) => state.books);

	const showingItems = filteredBooks && filteredBooks.length > 0 ? filteredBooks : books;

	useEffect(() => {
		dispatch(fetchBooks());
	}, [dispatch]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilterInput(e.target.value);
		dispatch(filterItems(e.target.value));
	};

	return (
		<React.Fragment>
			{!isLoading && (
				<React.Fragment>
					<Header>
						<img alt='ByteBooks Logo' src='./logo.png' height={70} />
					</Header>
					<PageSection>
						<h2 className='text-4xl text-white font-bold'>Já sabe por onde começar?</h2>
						<h3 className='text-base text-white font-bold mt-4'>
							Encontre em nossa estante o que precisa para seu desenvolvimento!
						</h3>
						<div className='relative mt-4 rounded-md text-center p-4 w-[350px] md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-1/2'>
							<input
								placeholder='Qual será sua próxima leitura?'
								className='rounded-3xl text-base border-white hover:border-[#B87900] focus-visible:border-[#B87900] border text-center p-4 w-full focus:placeholder-transparent focus:text-left text-white bg-transparent placeholder-white'
								onChange={handleSearch}
								value={filterInput}
							/>
						</div>
					</PageSection>
					<React.Fragment>
						{!filteredBooks?.length && filterInput.length > 0 ? (
							<div className='flex-1 items-center mt-4'>
								<h2 className='text-center text-[#002F52] text-[32px]'>
									Oops! Não encontramos nenhum resultado.
								</h2>
								<img
									src='/not_found.png'
									alt='sem resultado'
									className='w-1/2 max-w-[500px] mx-auto mt-4'
								/>
							</div>
						) : (
							<PageContent>
								<div className='flex flex-wrap justify-center container items-start'>
									{showingItems.map((book) => (
										<div className='flex flex-col items-start justify-center w-[246px] m-4'>
											<img src={book.image} alt={book.title} />
											<div className='flex flex-col'>
												<h3 className='text-lg text-[#002F52] font-bold text-left my-2'>
													{book.title}
												</h3>
												<p className='text-sm text-[#221F20]'>Por: {book.author}</p>
											</div>
										</div>
									))}
								</div>
							</PageContent>
						)}
						<Footer />
					</React.Fragment>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default Catalog;

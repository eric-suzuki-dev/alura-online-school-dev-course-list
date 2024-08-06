import { useDispatch, useSelector } from 'react-redux';
import PageContent from '../../components/PageContent';
import PageSection from '../../components/PageSection';
import React, { Suspense, lazy, useEffect, useMemo } from 'react';
import { fetchBooks } from '../../store/reducers/books';
import { AppDispatch, RootState } from '../../store/store';
import { resolvePromise } from '../../utils';

const BooksList = lazy(() => resolvePromise(import('../../components/BooksList')));

const Catalog: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [filterInput, setFilterInput] = React.useState('');
	const { books } = useSelector((state: RootState) => state.books);

	const showingItems = useMemo(() => {
		return filterInput.length > 0
			? books.filter((book) => book.title.toLowerCase().includes(filterInput))
			: books;
	}, [books, filterInput]);

	useEffect(() => {
		dispatch(fetchBooks());
	}, [dispatch]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilterInput(e.target.value);
	};

	return (
		<React.Fragment>
			<React.Fragment>
				<PageSection isCatalog>
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
					{!showingItems.length && filterInput.length > 0 ? (
						<div className='flex-1 items-center mt-4'>
							<h2 className='text-center text-[#002F52] text-[32px]'>
								Oops! Não encontramos nenhum resultado.
							</h2>
							<img
								src='/not_found.webp'
								alt='sem resultado'
								className='w-1/2 max-w-[500px] mx-auto mt-4'
							/>
						</div>
					) : (
						<PageContent>
							<div className='flex flex-wrap justify-center container items-start'>
								<Suspense fallback={<img src='/loading.gif' alt='carregando' width={200} />}>
									<BooksList items={showingItems} />
								</Suspense>
							</div>
						</PageContent>
					)}
				</React.Fragment>
			</React.Fragment>
		</React.Fragment>
	);
};

export default Catalog;

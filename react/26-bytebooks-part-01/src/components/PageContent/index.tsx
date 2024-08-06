type PageContentProps = {
	children: React.ReactNode;
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
	return <div className='flex w-full justify-center mt-20'>{children}</div>;
};

export default PageContent;

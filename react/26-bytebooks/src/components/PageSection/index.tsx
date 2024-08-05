type PageSectionProps = {
	children: React.ReactNode;
};

const PageSection: React.FC<PageSectionProps> = ({ children }) => {
	return (
		<div className='bg-[url("./bg-section.png")] h-96'>
			<section className='flex flex-col items-center justify-center h-96 bg-gradient-to-r from-[#002F52] to-[#024271] to-95% w-full opacity-90'>
				{children}
			</section>
		</div>
	);
};

export default PageSection;

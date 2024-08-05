type HeaderProps = {
	children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
	return (
		<header className='flex items-center bg-white h-20 px-20 w-full py-[18px]'>{children}</header>
	);
};

export default Header;

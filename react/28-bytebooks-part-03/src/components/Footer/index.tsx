import { memo } from 'react';

const FooterComponent = () => {
	return (
		<div className='flex h-20 w-full justify-center items-center border-t border-[#9C9C9C] mt-6'>
			<h6 className='text-[#002F52] text-base text-center'>
				Desenvolvido por Alura. Projeto fictício sem fins comerciais.
			</h6>
		</div>
	);
};

const Footer = memo(FooterComponent);
export default Footer;

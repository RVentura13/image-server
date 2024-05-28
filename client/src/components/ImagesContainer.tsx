import { BiImageAdd } from 'react-icons/bi';
import { Card } from './Card';

export const ImagesContainer = () => {
	return (
		<section className='w-full m-auto mb-20'>
			<h1 className='text-4xl text-center font-bold m-10'>Imagenes guardadas</h1>
			<div className='max-w-7xl m-auto flex flex-grow gap-5 justify-around items-center flex-wrap'>
				<div className='w-[90%] md:w-[400px] h-[674px] flex flex-col justify-center bg-white shadow-dark shadow-lg items-center rounded-xl overflow-hidden transition ease-in duration-150 hover:bg-dark/10 group'>
					<div className='transition ease-in duration-150 group-hover:scale-110'>
						<BiImageAdd size={100} />
					</div>
					<h3 className='text-xl'>Agregar nueva imagen</h3>
				</div>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</section>
	);
};

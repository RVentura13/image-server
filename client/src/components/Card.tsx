import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdZoomOutMap } from 'react-icons/md';

export const Card = () => {
	return (
		<div className='w-[90%] md:max-w-[400px] h-full bg-white shadow-lg shadow-dark rounded-lg overflow-hidden '>
			<div className='w-full h-96 overflow-hidden'>
				<img
					className='object-cover w-full h-full hover:scale-105 transition duration-200 ease-in'
					src='https://i.pinimg.com/564x/33/99/b2/3399b28b983d93f533b7f0afc7bcf05f.jpg'
					alt=''
				/>
			</div>
			<div className='w-full'>
				<div className='w-full h-[220px] p-5 overflow-hidden'>
					<h3 className='text-xl font-bold'>Name</h3>
					<p className='text-lg font-bold'>Description:</p>
					<p className='text-base'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam excepturi dolorem minus, sunt reiciendis
						repudiandae ut delectus voluptate laudantium dolore explicabo enim vero, quod ratione obcaecati aperiam
						alias eveniet hic!tus voluptate laudantium dolore explicabo enim vero, quod ratione obcaecati aperiam alias
						eveniet hic!tus voluptate laudantium dolore explicabo enim vero, quod ratione obcaecati aperiam alias
						eveniet hic!t
					</p>
				</div>
				<div className='w-full flex gap-5 justify-end items-center p-5'>
					<button
						className=' text-blue-400 transition ease-in duration-150 hover:scale-110'
						title='Ver imagen'
					>
						<a
							href='https://i.pinimg.com/564x/33/99/b2/3399b28b983d93f533b7f0afc7bcf05f.jpg'
							target='_blank'
						>
							<MdZoomOutMap size={30} />
						</a>
					</button>
					<button
						className='text-cyan-400 transition ease-in duration-150 hover:scale-110'
						title='Editar'
					>
						<FaEdit size={30} />
					</button>
					<button
						className='text-red-400 transition ease-in duration-150 hover:scale-110'
						title='Eliminar'
					>
						<RiDeleteBin6Line size={30} />
					</button>
				</div>
			</div>
		</div>
	);
};

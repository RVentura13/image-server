export const NavBar = () => {
	return (
		<header className='w-full m-auto bg-primary'>
			<nav className='max-w-7xl h-20 m-auto flex justify-between items-center'>
				<div>
					<h3 className='text-white text-2xl font-bold uppercase'>Image-Server</h3>
				</div>
				<ul className='flex gap-5 justify-center items-center'>
					<li className='text-white text-base font-bold uppercase hover:text-dark transition-all ease-in duration-150'>
						<a href='#'>Administración</a>
					</li>
					<li className='text-white text-base font-bold uppercase hover:text-dark transition-all ease-in duration-150'>
						<a href='#'>Usuario</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

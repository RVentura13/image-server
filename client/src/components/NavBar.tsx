import { NavLink } from 'react-router-dom';

export const NavBar = () => {
	return (
		<header className='w-full m-auto bg-primary'>
			<nav className='max-w-7xl h-20 m-auto flex justify-between items-center'>
				<div>
					<h3></h3>
					<NavLink
						to='/'
						className='text-white text-2xl font-bold uppercase cursor-pointer '
					>
						Image-Server
					</NavLink>
				</div>
				<ul className='flex gap-5 justify-center items-center'>
					<li>
						<NavLink
							to='/admin/users'
							className={({ isActive }) =>
								isActive
									? 'text-dark text-base font-bold uppercase hover:text-dark transition-all ease-in duration-150'
									: 'text-white text-base font-bold uppercase hover:text-dark transition-all ease-in duration-150'
							}
						>
							Administración
						</NavLink>
					</li>
					<li>
						{' '}
						<NavLink
							to='/usuario'
							className={({ isActive }) =>
								isActive
									? 'text-dark text-base font-bold uppercase hover:text-dark transition-all ease-in duration-150'
									: 'text-white text-base font-bold uppercase hover:text-dark transition-all ease-in duration-150'
							}
						>
							Usuario
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

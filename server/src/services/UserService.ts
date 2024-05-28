import { User } from '../models/User.model';

type userDataProps = {
	name: string;
	roleId: number;
	username: string;
	email: string;
	password: string;
};

export const getUsersService = async (): Promise<User[] | null> => {
	const users = await User.findAll();
	return users;
};

export const getUserService = async (id: string): Promise<User | null> => {
	const users = await User.findByPk(id);
	return users;
};

export const createUserService = async (userData: userDataProps): Promise<User> => {
	const user = await User.create(userData);
	return user;
};

export const updateUserService = async (id: string, userData: userDataProps): Promise<User | undefined> => {
	//Buscar al usuario que se desea actualizar
	const userToUpdate = await User.findByPk(id);

	//Si el usuario no es encontrado
	const user = await userToUpdate?.update(userData);
	return user;
};

export const updateActiveUserService = async (id: string, active: boolean): Promise<User | undefined> => {
	//Buscar al usuario que se desea actualizar
	const userToUpdate = await User.findByPk(id);

	//Si el usuario no es encontrado
	const user = await userToUpdate?.update({ active });
	return user;
};

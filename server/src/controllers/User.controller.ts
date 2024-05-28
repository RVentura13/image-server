import { Request, Response } from 'express';

import { User } from '../models/User.model';
import {
	createUserService,
	getUserService,
	getUsersService,
	updateActiveUserService,
	updateUserService,
} from '../services/UserService';

export const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await getUsersService();
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

export const getUser = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const user = await getUserService(id);
		if (user) {
			res.json(user);
		} else {
			res.status(400).json({ message: 'Usuario no encontrado' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

export const createUser = async (req: Request, res: Response) => {
	try {
		const { name, roleId, username, email, password } = req.body;

		const user = await createUserService({
			name,
			roleId,
			username,
			email,
			password,
		});
		res.status(201).json({ message: 'Usuario creado correctamente', user });
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

export const updateUser = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { name, roleId, username, email, password } = req.body;

		const user = await updateUserService(id, { name, roleId, username, email, password });

		if (user) {
			res.status(201).json({ message: 'Usuario actualizado correctamente', user });
		} else {
			res.status(404).json({ message: 'Usuario no encontrado' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

export const UpdateActiveUser = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { active } = req.body;

		const user = await updateActiveUserService(id, active);

		if (user) {
			res.status(201).json({ message: 'Estado del usuario actualizado', user });
		} else {
			res.status(404).json({ message: 'Usuario no encontrado' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

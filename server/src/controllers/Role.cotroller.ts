import { Request, Response } from 'express';
import { Role } from '../models/Role.model';

export const getRoles = async (req: Request, res: Response): Promise<void> => {
	try {
		const role = await Role.findAll();
		res.json(role);
	} catch (error) {
		res.status(500).json({ message: 'Internal Error Server', error });
	}
};

export const getRole = async (req: Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;

		const role = await Role.findByPk(id);
		if (role) {
			res.json(role);
		} else {
			res.status(400).json({ message: 'Rol no encontrado' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Interna Server Error', error });
	}
};

export const createRole = async (req: Request, res: Response): Promise<void> => {
	try {
		const { name, description, active } = req.body;
		const role = await Role.create({ name, description, active });
		res.json({ message: 'Rol creado correctamente', role });
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

export const updateRole = async (req: Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;
		const { name, description, active } = req.body;
		const roleToUptate = await Role.findByPk(id);
		if (roleToUptate) {
			const role = await roleToUptate.update({ name, description, active });
			res.json({ message: 'Rol actualizado correctamente', role });
		} else {
			res.status(400).json({ message: 'Rol no encontrado' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

export const updateActiveRole = async (req: Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;
		const { active } = req.body;

		const roleToUpdateActive = await Role.findByPk(id);

		if (roleToUpdateActive) {
			const role = await roleToUpdateActive.update({ active });
			res.json({ message: 'Estado del rol actualizado correctamente', role });
		} else {
			res.status(400).json({ message: 'Rol no encontrado' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

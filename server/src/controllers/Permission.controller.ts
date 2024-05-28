import { Request, Response } from 'express';
import { Permission } from '../models/Permission.model';

export const getPermissions = async (req: Request, res: Response): Promise<void> => {
	try {
		const permission = await Permission.findAll();
		res.json(permission);
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

export const getPermission = async (req: Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;
		const permission = await Permission.findByPk(id);
		if (permission) {
			res.json(permission);
		} else {
			res.status(400).json({ message: 'Permiso no encontrado' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

export const createPermission = async (req: Request, res: Response): Promise<void> => {
	try {
		const { name, active } = req.body;
		const permission = await Permission.create({ name, active });
		res.json({ message: 'Permiso creado correctamente', permission });
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

export const updatePermission = async (req: Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;
		const { name, active } = req.body;

		const permissionToUpdate = await Permission.findByPk(id);

		if (permissionToUpdate) {
			const permission = await permissionToUpdate.update({ name, active });
			res.json({ message: 'Permiso actualizado correctamente', permission });
		} else {
			res.status(400).json({ message: 'Permiso no encontrado' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

export const updateActivePermission = async (req: Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;
		const { active } = req.body;

		const permissionToUpdate = await Permission.findByPk(id);

		if (permissionToUpdate) {
			const permission = await permissionToUpdate.update({ active });
			res.json({ message: 'Estado del permiso actualizado correctamente', permission });
		} else {
			res.status(400).json({ message: 'Permiso no encontrado' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

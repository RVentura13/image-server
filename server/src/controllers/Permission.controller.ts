import { Request, Response } from 'express';
import { Permission } from '../models/Permission.model';
import {
	createPermissionService,
	getPermissionService,
	getPermissionsService,
	updateActivePermissionService,
	updatePermissionService,
} from '../services/PermissionService';

export const getPermissions = async (req: Request, res: Response): Promise<void> => {
	try {
		const permission = await getPermissionsService();

		res.json(permission);
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

export const getPermission = async (req: Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;

		const permission = await getPermissionService(id);

		if (permission) {
			res.json(permission);
		} else {
			res.status(404).json({ message: 'Permiso no encontrado' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

export const createPermission = async (req: Request, res: Response): Promise<void> => {
	try {
		const { name } = req.body;

		const permission = await createPermissionService({ name });

		res.status(201).json({ message: 'Permiso creado correctamente', permission });
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

export const updatePermission = async (req: Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;
		const { name } = req.body;

		const permission = await updatePermissionService(id, { name });

		if (permission) {
			res.status(201).json({ message: 'Permiso actualizado correctamente', permission });
		} else {
			res.status(404).json({ message: 'Permiso no encontrado' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

export const updateActivePermission = async (req: Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;
		const { active } = req.body;

		const permission = await updateActivePermissionService(id, active);

		if (permission) {
			res.status(201).json({ message: 'Estado del permiso actualizado correctamente', permission });
		} else {
			res.status(404).json({ message: 'Permiso no encontrado' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

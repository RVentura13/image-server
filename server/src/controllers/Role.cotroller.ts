import { Request, Response } from 'express';
import {
	createRolService,
	getRolService,
	getRolesService,
	updateActiveRoleService,
	updateRoleService,
} from '../services/RoleService';

export const getRoles = async (req: Request, res: Response): Promise<void> => {
	try {
		const roles = await getRolesService();
		res.json(roles);
	} catch (error) {
		res.status(500).json({ message: 'Internal Error Server', error });
	}
};

export const getRole = async (req: Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;

		const role = await getRolService(id);

		if (role) {
			res.json(role);
		} else {
			res.status(404).json({ message: 'Rol no encontrado' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Interna Server Error', error });
	}
};

export const createRole = async (req: Request, res: Response): Promise<void> => {
	try {
		const { name, description } = req.body;
		const role = await createRolService({ name, description });

		res.status(201).json({ message: 'Rol creado correctamente', role });
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

export const updateRole = async (req: Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;
		const { name, description } = req.body;

		const role = await updateRoleService(id, { name, description });

		if (role) {
			res.status(201).json({ message: 'Rol actualizado correctamente', role });
		} else {
			res.status(404).json({ message: 'Rol no encontrado' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

export const updateActiveRole = async (req: Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;
		const { active } = req.body;

		const roleToUpdateActive = await updateActiveRoleService(id, active);

		if (roleToUpdateActive) {
			const role = await roleToUpdateActive.update({ active });
			res.status(201).json({ message: 'Estado del rol actualizado correctamente', role });
		} else {
			res.status(404).json({ message: 'Rol no encontrado' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

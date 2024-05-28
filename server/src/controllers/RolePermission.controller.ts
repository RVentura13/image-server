import { Request, Response } from 'express';
import { RolePermission } from '../models/RolePermission.model';

export const getRelation = async (req: Request, res: Response): Promise<void> => {
	try {
		const rolePermission = await RolePermission.findAll();
		res.json(rolePermission);
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

export const createRelation = async (req: Request, res: Response): Promise<void> => {
	try {
		const { roleId, permissionId } = req.body;

		const exist = await RolePermission.findOne({ where: { roleId, permissionId } });

		if (exist) {
			const updateRelation = await exist.update({ roleId, permissionId });
			res.json({ message: 'Actualizado exitosamente', updateRelation });
		} else {
			const rolePermission = await RolePermission.create({ roleId, permissionId });
			res.json({ message: 'Creado exitosamente', rolePermission });
		}
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error });
	}
};

import express from 'express';
import { body, param } from 'express-validator';
import {
	createPermission,
	getPermission,
	getPermissions,
	updateActivePermission,
	updatePermission,
} from '../controllers/Permission.controller';
import { validateRequest } from '../middlewares/validateRequest';

export const permissionRoutes = express.Router();

permissionRoutes.get('/', getPermissions);
permissionRoutes.get('/:id', [param('id').isNumeric().withMessage('ID no válido')], validateRequest, getPermission);
permissionRoutes.post(
	'/',
	[body('name').notEmpty().withMessage('El nombre no puede ir vacío').isString().withMessage('Dato no valido')],
	validateRequest,
	createPermission
);
permissionRoutes.put(
	'/:id',
	[
		param('id').isNumeric().withMessage('ID no válido'),
		body('name').notEmpty().withMessage('El nombre no puede ir vacío').isString().withMessage('Dato no valido'),
	],
	validateRequest,
	updatePermission
);
permissionRoutes.patch(
	'/:id',
	[
		param('id').isNumeric().withMessage('ID no válido'),
		body('active')
			.notEmpty()
			.withMessage('El estado del rol no puede ir vacío')
			.isBoolean()
			.withMessage('Dato no valido'),
	],
	validateRequest,
	updateActivePermission
);

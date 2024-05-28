import express from 'express';
import { body, param } from 'express-validator';
import { createRole, getRole, getRoles, updateActiveRole, updateRole } from '../controllers/Role.cotroller';
import { validateRequest } from '../middlewares/validateRequest';

export const roleRoutes = express.Router();

//Rutas para los roles de usuario
roleRoutes.get('/', getRoles);
roleRoutes.get('/:id', [param('id').isNumeric().withMessage('ID no válido')], validateRequest, getRole);
roleRoutes.post(
	'/',
	[
		body('name').notEmpty().withMessage('El nombre del rol no puede ir vacío').isString().withMessage('Dato no válido'),
		body('description')
			.notEmpty()
			.withMessage('La descripción no puede ir vacía')
			.isString()
			.withMessage('Dato no válido'),
	],
	validateRequest,
	createRole
);
roleRoutes.put(
	'/:id',
	[
		param('id').isNumeric().withMessage('ID no válido'),
		body('name').notEmpty().withMessage('El nombre del rol no puede ir vacío').isString().withMessage('Dato no válido'),
		body('description')
			.notEmpty()
			.withMessage('La descripción no puede ir vacía')
			.isString()
			.withMessage('Dato no válido'),
	],
	validateRequest,
	updateRole
);
roleRoutes.patch(
	'/:id',
	[
		param('id').isNumeric().withMessage('ID no válido'),
		body('active').notEmpty().withMessage('El estado no puede ir vacío').isBoolean().withMessage('Dato no válido'),
	],
	validateRequest,
	updateActiveRole
);

import express from 'express';
import { body, param } from 'express-validator';
import { createRole, getRole, getRoles, updateActiveRole, updateRole } from '../controllers/Role.cotroller';
import { validateRequest } from '../middlewares/validateRequest';

export const roleRoutes = express.Router();

//Schema para documentación

/**
 * @swagger
 * components:
 *  schemas:
 *   Role:
 *    type: object
 *    description: Esquema para los roles del Usuario del sistema.
 *    properties:
 *     id:
 *      type: number
 *      description: ID del rol del Usuario.
 *      example: 100
 *     name:
 *      type: string
 *      description: Nombre del rol de Usuario.
 *      example: Administrador
 *     description:
 *      type: string
 *      description: Descripción del rol del usuario.
 *      example: Usuario con acceso total al sistema.
 *     active:
 *      type: string
 *      description: Estado del rol en el sistema.
 *      example: 1
 */

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

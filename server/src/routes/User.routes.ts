import express from 'express';
import { body, param } from 'express-validator';
import { UpdateActiveUser, createUser, getUser, getUsers, updateUser } from '../controllers/User.controller';
import { validateRequest } from '../middlewares/validateRequest';

export const userRoutes = express.Router();

//Rutas para el CRUD del usuario
userRoutes.get('/', getUsers);
userRoutes.get('/:id', [param('id').isNumeric().withMessage('ID no valido')], validateRequest, getUser);
userRoutes.post(
	'/',
	[
		body('name').notEmpty().withMessage('El nombre no puede ir vacío').isString().withMessage('Dato no válido'),
		body('roleId').notEmpty().withMessage('El rol no puede ir vacío').isNumeric().withMessage('Dato no válido'),
		body('username').notEmpty().withMessage('El usuario no puede ir vacío').isString().withMessage('Dato no válido'),
		body('email')
			.notEmpty()
			.withMessage('El correo no puede ir vacío')
			.isEmail()
			.withMessage('Correo con formato no válido'),
		body('password').notEmpty().withMessage('La contraseña no puede ir vacía').isString().withMessage('Dato no válido'),
	],
	validateRequest,
	createUser
);
userRoutes.put(
	'/:id',
	[
		param('id').isNumeric().withMessage('ID no válido'),
		body('name').notEmpty().withMessage('El nombre no puede ir vacío').isString().withMessage('Dato no válido'),
		body('roleId').notEmpty().withMessage('El rol no puede ir vacío').isNumeric().withMessage('Dato no válido'),
		body('username').notEmpty().withMessage('El usuario no puede ir vacío').isString().withMessage('Dato no válido'),
		body('email')
			.notEmpty()
			.withMessage('El correo no puede ir vacío')
			.isEmail()
			.withMessage('Correo con formato no válido'),
		body('password').notEmpty().withMessage('La contraseña no puede ir vacía').isString().withMessage('Dato no válido'),
	],
	validateRequest,
	updateUser
);
userRoutes.patch(
	'/:id',
	[
		param('id').isNumeric().withMessage('ID no válido'),
		body('active').notEmpty().withMessage('El estado no puede ir vacío').isBoolean().withMessage('Dato no válido'),
	],
	validateRequest,
	UpdateActiveUser
);

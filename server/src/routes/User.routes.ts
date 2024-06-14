import express from 'express';
import { body, param } from 'express-validator';
import { UpdateActiveUser, createUser, getUser, getUsers, updateUser } from '../controllers/User.controller';
import { validateRequest } from '../middlewares/validateRequest';

export const userRoutes = express.Router();

//Schema para documentación
/**
 * @swagger
 * components:
 *  schemas:
 *   User:
 *    type: object
 *    description: Esquema para el Usuario del sistema.
 *    properties:
 *     id:
 *      type: number
 *      description: ID del Usuario.
 *      example: 100
 *     name:
 *      type: string
 *      description: Nombre real del Usuario.
 *      example: Jorge Perez
 *     roleId:
 *      type: number
 *      description: ID del Rol de Usuario.
 *      example: 2
 *     username:
 *      type: string
 *      description: Nombre de Usuario para el sistema.
 *      example: jperez
 *     email:
 *      type: string
 *      description: Correo del Usuario.
 *      example: correo@correo.com
 *     password:
 *      type: string
 *      description: Contraseña del Usuario.
 *      example: c0ntraseñ@123
 *     active:
 *      type: boolean
 *      description: Estado del Usuario en el sistema.
 *      example: true
 *    requerid:
 *      - name
 *      - roleId
 *      - email
 *      - password
 */

//Rutas para el CRUD del usuario

/**
 * @swagger
 * /api/users:
 *  get:
 *   summary: Obtener el listado de todos los Usuarios.
 *   tags:
 *    - Users
 *   description: Retorna un listado de todos los Usuarios.
 *   responses:
 *    200:
 *     description: Respuesta exitosa.
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/User'
 */

userRoutes.get('/', getUsers);

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *   summary: Obtener Usuario por el ID.
 *   tags:
 *    - Users
 *   description: Retorna un Usuario basado en su ID unica.
 *   parameters:
 *    - in: path
 *      name: id
 *      description: Id del Usuario que queremos obtener.
 *      required: true
 *      schema:
 *       type: integer
 *   responses:
 *    200:
 *     description: Respuesta exitosa.
 *     content:
 *      application/json:
 *       schema:
 *         $ref: '#/components/schemas/User'
 *    404:
 *     description: Usuario no encontrado.
 *
 */
userRoutes.get('/:id', [param('id').isNumeric().withMessage('ID no valido')], validateRequest, getUser);

/**
 * @swagger
 * /api/users:
 *  post:
 *   summary: Crear un nuevo Usuario.
 *   tags:
 *    - Users
 *   description: Retorna una nueva grabación en la base de datos.
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        name:
 *         type: string
 *         description: El nombre del Usuario.
 *         example: Jorge Perez
 *        roleId:
 *         type: number
 *         description: El ID del Rol de Usuario.
 *         example: 2
 *        username:
 *         type: string
 *         description: Nombre de Usuario para el sistema.
 *         example: jperez
 *        email:
 *         type: string
 *         description: El correo del Usuario.
 *         example: correo@correo.com
 *        password:
 *         type: string
 *         description: La contraseña del Usuario.
 *         example: c0ntraseñ@123
 *   responses:
 *    201:
 *     description: Creado correctamente.
 *    400:
 *     description: Datos incorrectos.
 *
 */

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

/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *   summary: Actualizar un Usuario.
 *   tags:
 *    - Users
 *   description: Retorna un Usuario actualizado.
 *   parameters:
 *    - in: path
 *      name: id
 *      description: ID del Usuario que se quiere actualizar.
 *      required: true
 *      schema:
 *       type: integer
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        name:
 *         type: string
 *         description: Nombre real del Usuario.
 *         example: Jorge Perez
 *        roleId:
 *         type: number
 *         description: ID del Rol de Usuario.
 *         example: 2
 *        username:
 *         type: string
 *         description: Nombre de Usuario para el sistema.
 *         example: jperez
 *        email:
 *         type: string
 *         description: Correo del Usuario.
 *         example: correo@correo.com
 *        password:
 *         type: string
 *         description: Contraseña del Usuario.
 *         example: c0ntraseñ@123
 *   responses:
 *    201:
 *     description: Actualizado correctamente.
 *    400:
 *     description: Datos incorrectos.
 *    404:
 *     description: Usuario no encontrado.
 */

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

/**
 * @swagger
 * /api/users/{id}:
 *  patch:
 *   summary: Actualiza el estado del Usuario.
 *   tags:
 *    - Users
 *   description: Retorna el estado de un Usuario Actualizado.
 *   parameters:
 *    - in: path
 *      name: id
 *      description: ID del Usuario a actualizar
 *      required: true
 *      schema:
 *       type: integer
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        active:
 *         type: boolean
 *         description: Estado del cliente a actualizar.
 *         example: 1
 *   responses:
 *    201:
 *     description: Actualizado correctamente.
 *    400:
 *     description: Dato incorrecto.
 *    404:
 *     description: Usuario no encontrado.
 */

userRoutes.patch(
	'/:id',
	[
		param('id').isNumeric().withMessage('ID no válido'),
		body('active').notEmpty().withMessage('El estado no puede ir vacío').isBoolean().withMessage('Dato no válido'),
	],
	validateRequest,
	UpdateActiveUser
);

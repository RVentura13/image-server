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

//Schema para documentación

/**
 * @swagger
 * components:
 *  schemas:
 *   Permission:
 *    type: object
 *    description: Esquema para los permisos del rol de Usuario del sistema.
 *    properties:
 *     id:
 *      type: number
 *      description: ID del permiso del rol de usuario.
 *      example: 100
 *     name:
 *      type: string
 *      description: Nombre del permiso del rol de usuario.
 *      example: Create
 *     description:
 *      type: string
 *      description: Descripción del permiso del rol de usuario.
 *      example: Permiso de creacion en el sistema.
 *     active:
 *      type: string
 *      description: Estado del permiso de rol en el sistema.
 *      example: true
 */

//Rutas para los roles de usuario

/**
 * @swagger
 * /api/permissions:
 *  get:
 *   summary: Obtener el listado de todos los permisos.
 *   tags:
 *    - Permissions
 *   description: Retorna un listado de todos los permisos.
 *   responses:
 *    200:
 *     description: Respuesta exitosa.
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/Permission'
 */

permissionRoutes.get('/', getPermissions);

/**
 * @swagger
 * /api/permissions/{id}:
 *  get:
 *   summary: Obtener permiso por el ID.
 *   tags:
 *   - Permissions
 *   description: Retorna un permiso basado en su ID unica.
 *   parameters:
 *    - in: path
 *      name: id
 *      description: ID del permiso que queremos obtener.
 *      required: true
 *      schema:
 *       type: integer
 *   responses:
 *    200:
 *     description: Respuesta exitosa
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Permission'
 *    404:
 *     description: Permiso no encontrado.
 */
permissionRoutes.get('/:id', [param('id').isNumeric().withMessage('ID no válido')], validateRequest, getPermission);

/**
 * @swagger
 * /api/permissions:
 *  post:
 *   summary: Crear un nuevo permiso.
 *   tags:
 *    - Permissions
 *   description: Retorna una nueva grabacion en la base de datos.
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        name:
 *         type: string
 *         description: Nombre del permiso.
 *         example: Create
 *        description:
 *         type: string
 *         description: Descripcion del permiso.
 *         example: Permiso de creacion en el sistema.
 *   responses:
 *    201:
 *     description: Creado correctamente.
 *    400:
 *     description: Datos incorrectos.
 *
 */

permissionRoutes.post(
	'/',
	[
		body('name').notEmpty().withMessage('El nombre no puede ir vacío').isString().withMessage('Dato no valido'),
		body('description')
			.notEmpty()
			.withMessage('La descripcion no puede ir vacia')
			.isString()
			.withMessage('Dato no valido'),
	],
	validateRequest,
	createPermission
);

/**
 * @swagger
 * /api/permissions/{id}:
 *  put:
 *   summary: Actualizar un permiso
 *   tags:
 *    - Permissions
 *   description: Retorna un permiso actualizado.
 *   parameters:
 *    - in: path
 *      name: id
 *      description: ID del permiso que se quiere actualizar.
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
 *         description: Nombre del permiso.
 *         example: Create
 *        description:
 *         type: string
 *         description: Description del permiso.
 *         example: Permisos de creacion en el sistema.
 *   responses:
 *    201:
 *     description: Actualizado correctamente.
 *    400:
 *     description: Datos incorrectos.
 *    404:
 *     description: Permiso no encontrado.
 */

permissionRoutes.put(
	'/:id',
	[
		param('id').isNumeric().withMessage('ID no válido'),
		body('name').notEmpty().withMessage('El nombre no puede ir vacío').isString().withMessage('Dato no valido'),
		body('description')
			.notEmpty()
			.withMessage('La descripcion no puede ir vacia')
			.isString()
			.withMessage('Dato no valido'),
	],
	validateRequest,
	updatePermission
);

/**
 * @swagger
 * /api/permissions/{id}:
 *  patch:
 *   summary: Actualizar el estado activo del permiso.
 *   tags:
 *    - Permissions
 *   description: Retorna el estado activo de un permiso actualizado.
 *   parameters:
 *    - in: path
 *      name: id
 *      description: ID del permiso a actualizar.
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
 *         description: Estado del permiso a actualizar
 *         example: true
 *   responses:
 *    201:
 *     description: Actualizado correctamente.
 *    400:
 *     description: Dato incorrecto.
 *    404:
 *     description: Permiso no encontrado.
 */

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

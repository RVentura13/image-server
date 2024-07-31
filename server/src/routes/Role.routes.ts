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
 *      example: true
 */

//Rutas para los roles de usuario

/**
 * @swagger
 * /api/roles:
 *  get:
 *   summary: Obtener el listado de todos los roles.
 *   tags:
 *    - Roles
 *   description: Retorna un listado de todos los roles.
 *   responses:
 *    200:
 *     description: Respuesta exitosa.
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/Role'
 */
roleRoutes.get('/', getRoles);

/**
 * @swagger
 * /api/roles/{id}:
 *  get:
 *   summary: Obtener rol por el ID.
 *   tags:
 *   - Roles
 *   description: Retorna un rol basado en su ID unica.
 *   parameters:
 *    - in: path
 *      name: id
 *      description: ID del rol que queremos obtener.
 *      required: true
 *      schema:
 *       type: integer
 *   responses:
 *    200:
 *     description: Respuesta exitosa
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Role'
 *    404:
 *     description: Usuario no encontrado.
 */

roleRoutes.get('/:id', [param('id').isNumeric().withMessage('ID no válido')], validateRequest, getRole);

/**
 * @swagger
 * /api/roles:
 *  post:
 *   summary: Crear un nuevo rol.
 *   tags:
 *    - Roles
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
 *         description: Nombre del rol.
 *         example: Administrador
 *        description:
 *         type: string
 *         description: Descripcion de la funcion del rol.
 *         example: Encargado de la administracion del sistema.
 *   responses:
 *    201:
 *     description: Creado correctamente.
 *    400:
 *     description: Datos incorrectos.
 *
 */

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

/**
 * @swagger
 * /api/roles/{id}:
 *  put:
 *   summary: Actualizar un rol
 *   tags:
 *    - Roles
 *   description: Retorna un rol actualizado.
 *   parameters:
 *    - in: path
 *      name: id
 *      description: ID del rol que se quiere actualizar.
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
 *         description: Nombre del rol.
 *         example: Administrador
 *        description:
 *         type: string
 *         description: Description de la funcion del rol.
 *         example: Encargado de la administracion del sistema.
 *   responses:
 *    201:
 *     description: Actualizado correctamente.
 *    400:
 *     description: Datos incorrectos.
 *    404:
 *     description: Rol no encontrado.
 */

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

/**
 * @swagger
 * /api/roles/{id}:
 *  patch:
 *   summary: Actualizar el estado activo del rol.
 *   tags:
 *    - Roles
 *   description: Retorna el estado activo de un rol actualizado.
 *   parameters:
 *    - in: path
 *      name: id
 *      description: ID del rol a actualizar.
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
 *         description: Estado del rol a actualizar
 *         example: true
 *   responses:
 *    201:
 *     description: Actualizado correctamente.
 *    400:
 *     description: Dato incorrecto.
 *    404:
 *     description: Rol no encontrado.
 */
roleRoutes.patch(
	'/:id',
	[
		param('id').isNumeric().withMessage('ID no válido'),
		body('active').notEmpty().withMessage('El estado no puede ir vacío').isBoolean().withMessage('Dato no válido'),
	],
	validateRequest,
	updateActiveRole
);

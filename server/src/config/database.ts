import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { User } from '../models/User.model';
import { Role } from '../models/Role.model';
import { Permission } from '../models/Permission.model';
import { RolePermission } from '../models/RolePermission.model';

dotenv.config();

const db = new Sequelize(process.env.NAME_DATABASE!, process.env.USER_DATABASE!, process.env.PASSWORD_DATABASE, {
	host: process.env.HOST_DATABASE,
	dialect: 'mysql',
	port: 3306,
	timezone: '-06:00', // Configura la zona horaria para Guatemala
	models: [User, Role, Permission, RolePermission],
	logging: false,
});

export default db;

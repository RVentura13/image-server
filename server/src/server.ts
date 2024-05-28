import express from 'express';
import cors from 'cors';
import db from './config/database';
import { userRoutes } from './routes/User.routes';
import { roleRoutes } from './routes/Role.routes';
import { permissionRoutes } from './routes/Permission.routes';
import { rolePermissionsRoutes } from './routes/RolePermissions.routes';

const server = express();

//Conectar a base de datos
const connectionDB = async () => {
	try {
		await db.authenticate();
		await db.sync({ force: false });
		console.log('***** Conexión Exitosa a la BD *****');
	} catch (error) {
		console.log('Error al conectar con la base de datos', error);
	}
};

//Llamado a la base de datos
connectionDB();

//MIDLESWARE
server.use(express.json());
server.use(cors());

//Rutas
server.use('/api/users', userRoutes);
server.use('/api/roles', roleRoutes);
server.use('/api/permissions', permissionRoutes);
server.use('/api/rolepermissions', rolePermissionsRoutes);

server.use('/api', (req, res) => {
	res.send('Servidor de imagenes de rventura.dev');
});

export default server;

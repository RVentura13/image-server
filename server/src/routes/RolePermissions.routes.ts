import express from 'express';
import { createRelation, getRelation } from '../controllers/RolePermission.controller';

export const rolePermissionsRoutes = express.Router();

rolePermissionsRoutes.get('/', getRelation);
rolePermissionsRoutes.post('/', createRelation);

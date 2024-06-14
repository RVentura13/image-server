import { Permission } from '../models/Permission.model';

type PermissionDataProps = {
	name: string;
};

export const getPermissionsService = async (): Promise<Permission[] | null> => {
	const permisions = await Permission.findAll();
	return permisions;
};

export const getPermissionService = async (id: string): Promise<Permission | null> => {
	const permission = await Permission.findByPk(id);
	return permission;
};

export const createPermissionService = async (permissionData: PermissionDataProps): Promise<Permission> => {
	const permission = await Permission.create(permissionData);
	return permission;
};

export const updatePermissionService = async (
	id: string,
	permissionData: PermissionDataProps
): Promise<Permission | undefined> => {
	const permissionToUpdate = await Permission.findByPk(id);
	const permission = permissionToUpdate?.update(permissionData);
	return permission;
};

export const updateActivePermissionService = async (id: string, active: boolean): Promise<Permission | undefined> => {
	const permissionToUpdate = await Permission.findByPk(id);
	const permission = await permissionToUpdate?.update({ active });
	return permission;
};

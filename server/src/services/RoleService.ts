import { Role } from '../models/Role.model';

type RoleDataProps = {
	name: string;
	description: string;
};

export const getRolesService = async (): Promise<Role[] | null> => {
	const roles = await Role.findAll();
	return roles;
};

export const getRolService = async (id: string): Promise<Role | null> => {
	const role = await Role.findByPk(id);
	return role;
};

export const createRolService = async (roleData: RoleDataProps): Promise<Role> => {
	const role = await Role.create(roleData);
	return role;
};

export const updateRoleService = async (id: string, roleData: RoleDataProps): Promise<Role | undefined> => {
	const roleToUpdate = await Role.findByPk(id);
	const role = await roleToUpdate?.update(roleData);
	return role;
};

export const updateActiveRoleService = async (id: string, active: boolean): Promise<Role | undefined> => {
	const roleToUpdate = await Role.findByPk(id);
	const role = await roleToUpdate?.update({ active });
	return role;
};

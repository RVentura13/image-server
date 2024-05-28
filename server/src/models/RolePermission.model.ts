import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Role } from './Role.model';
import { Permission } from './Permission.model';

@Table({
	tableName: 'role-permissions',
	timestamps: true,
})
export class RolePermission extends Model {
	@ForeignKey(() => Role)
	@Column
	declare roleId: number;

	@ForeignKey(() => Permission)
	@Column
	declare permissionId: number;
}

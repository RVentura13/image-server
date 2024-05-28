import {
	AutoIncrement,
	BelongsToMany,
	Column,
	DataType,
	Default,
	Model,
	PrimaryKey,
	Table,
} from 'sequelize-typescript';
import { Role } from './Role.model';
import { RolePermission } from './RolePermission.model';

@Table({
	tableName: 'permissions',
	timestamps: true,
})
export class Permission extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column({
		type: DataType.INTEGER,
	})
	declare id: number;

	@Column({
		type: DataType.STRING,
		allowNull: false,
		unique: true,
	})
	declare name: string;

	@Default(true)
	@Column({ type: DataType.BOOLEAN })
	declare active: boolean;

	@BelongsToMany(() => Role, () => RolePermission)
	roles?: Role[];
}

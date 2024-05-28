import {
	AutoIncrement,
	Model,
	Column,
	DataType,
	PrimaryKey,
	Table,
	Default,
	BelongsToMany,
	HasMany,
} from 'sequelize-typescript';
import { Permission } from './Permission.model';
import { RolePermission } from './RolePermission.model';
import { User } from './User.model';

@Table({
	tableName: 'roles',
	timestamps: true,
})
export class Role extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column({
		type: DataType.INTEGER,
	})
	declare id: number;

	@Column({
		type: DataType.STRING(100),
		allowNull: false,
		unique: true,
	})
	declare name: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	declare description: string;

	@Default(true)
	@Column({
		type: DataType.BOOLEAN,
	})
	declare active: boolean;

	@HasMany(() => User)
	users!: User[];

	@BelongsToMany(() => Permission, () => RolePermission)
	permisions?: Permission[];
}

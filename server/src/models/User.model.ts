import {
	Table,
	Column,
	Model,
	Default,
	DataType,
	PrimaryKey,
	AutoIncrement,
	BelongsTo,
	ForeignKey,
} from 'sequelize-typescript';
import { Role } from './Role.model';

@Table({
	tableName: 'users',
	timestamps: true,
})
export class User extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column({ type: DataType.INTEGER })
	declare id: number;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	declare name: string;

	@ForeignKey(() => Role)
	@Column({ type: DataType.INTEGER, allowNull: false })
	declare roleId: number;

	@Column({ type: DataType.STRING(100), allowNull: false, unique: true })
	declare username: string;

	@Column({ type: DataType.STRING(100), allowNull: false, unique: true })
	declare email: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	declare password: string;

	@Column({
		type: DataType.STRING,
		allowNull: true,
	})
	declare resetPasswordToken?: string;

	@Column({
		type: DataType.DATE,
		allowNull: true,
	})
	declare resetPasswordExpires?: Date;

	@Column({
		type: DataType.STRING,
		allowNull: true,
	})
	declare authToken?: string;

	@Column({
		type: DataType.DATE,
		allowNull: true,
	})
	declare authTokenExpires?: Date;

	@Default(true)
	@Column({
		type: DataType.BOOLEAN,
	})
	declare active: boolean;

	@BelongsTo(() => Role)
	roles!: Role;
}

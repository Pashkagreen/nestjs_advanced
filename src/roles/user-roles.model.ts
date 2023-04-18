import { ApiProperty } from '@nestjs/swagger';
import { DataTypes } from 'sequelize';
import { Model, Table, Column, ForeignKey } from 'sequelize-typescript';
import { Role } from './roles.model';
import { User } from 'src/users/users.model';

@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {
  
  @ApiProperty({example: '1', description: 'Id'})
  @Column({type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => Role)
  @ApiProperty({example: '2', description: 'roleId'})
  @Column({type: DataTypes.INTEGER, allowNull: false, unique: true})
  roleId: number;

  @ForeignKey(() => User)
  @ApiProperty({example: '3', description: 'userId'})
  @Column({type: DataTypes.INTEGER })
  userId: number;
}
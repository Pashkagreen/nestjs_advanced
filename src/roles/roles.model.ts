import { ApiProperty } from '@nestjs/swagger';
import { DataTypes } from 'sequelize';
import { Model, Table, Column, BelongsToMany } from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { UserRoles } from './user-roles.model';

interface RoleCreationAttr {
  value: string,
  description: string
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttr> {
  
  @ApiProperty({example: '1', description: 'Id'})
  @Column({type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'ADMIN', description: 'Role'})
  @Column({type: DataTypes.STRING, allowNull: false, unique: true})
  value: string;

  @ApiProperty({example: 'Admin', description: 'Role description'})
  @Column({type: DataTypes.STRING })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[]
}
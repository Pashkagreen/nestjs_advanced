import { ApiProperty } from '@nestjs/swagger';
import { DataTypes } from 'sequelize';
import { Model, Table, Column } from 'sequelize-typescript';

interface RoleCreationAttr {
  value: string,
  description: string
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttr> {
  
  @ApiProperty({example: '1', description: 'Id'})
  @Column({type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: '1234', description: 'Password'})
  @Column({type: DataTypes.STRING, allowNull: false})
  password: string;

  @ApiProperty({example: 'Autist', description: 'Ban reason'})
  @Column({type: DataTypes.STRING })
  banReason: string;


}
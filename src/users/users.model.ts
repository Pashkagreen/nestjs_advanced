import { ApiProperty } from '@nestjs/swagger';
import { DataTypes } from 'sequelize';
import { Model, Table, Column } from 'sequelize-typescript';

interface UserCreationAttr {
  email: string,
  password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttr> {
  @ApiProperty({example: '1', description: 'Id'})
  @Column({type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'a@a.com', description: 'Email'})
  @Column({type: DataTypes.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({example: '1234', description: 'Password'})
  @Column({type: DataTypes.STRING, allowNull: false})
  password: string;

  @ApiProperty({example: 'Autist', description: 'Ban reason'})
  @Column({type: DataTypes.STRING })
  banReason: string;

  @ApiProperty({example: false, description: ''})
  @Column({type: DataTypes.BOOLEAN })
  banned: boolean;
}
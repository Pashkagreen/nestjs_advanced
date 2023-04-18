import { DataTypes } from 'sequelize';
import {
  Model,
  Table,
  Column,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface PostCreationAttr {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttr> {
  @Column({
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataTypes.STRING, unique: true, allowNull: false })
  title: string;

  @Column({ type: DataTypes.STRING, allowNull: false })
  content: string;

  @Column({ type: DataTypes.STRING })
  image: string;

  @ForeignKey(() => User)
  @Column({ type: DataTypes.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}

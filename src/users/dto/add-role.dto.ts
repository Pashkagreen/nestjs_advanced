import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @IsString({ message: 'String' })
  readonly value: string;

  @IsNumber({}, { message: 'Number' })
  readonly userId: number;
}

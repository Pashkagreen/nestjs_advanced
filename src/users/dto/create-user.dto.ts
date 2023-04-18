import { ApiProperty } from '@nestjs/swagger/dist';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'a@a.com', description: 'Email' })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail({}, { message: 'Неправильный емаил' })
  readonly email: string;

  @ApiProperty({ example: '1234', description: 'Password' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 16, { message: 'Не меньше 4 не больше 16' })
  readonly password: string;
}

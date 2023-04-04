import { ApiProperty } from '@nestjs/swagger/dist'

export class CreateUserDto {

  @ApiProperty({example: 'a@a.com', description: 'Email'})
  readonly email: string

  @ApiProperty({example: '1234', description: 'PAssword'})
  readonly password: string
}
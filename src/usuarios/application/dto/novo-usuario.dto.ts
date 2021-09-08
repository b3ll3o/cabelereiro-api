import { IsEmail, IsNotEmpty } from "class-validator";


export class NovoUsuarioDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  senha: string;
}
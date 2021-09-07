import { Injectable } from '@nestjs/common';
import { NovoUsuarioDto, UsuarioCadastradoDto } from './application/dto';
import { Usuario } from './domain/entities/usuario';

@Injectable()
export class UsuariosService {

  private usuarios: Usuario[]
  private contador: number

  constructor(){
    this.usuarios = []
    this.contador = 1
  }

  cadastraNovoUsuario(novoUsuarioDto: NovoUsuarioDto): UsuarioCadastradoDto {
    const { email, senha } = novoUsuarioDto
    const usuario = new Usuario(email, senha)
    this.usuarios.push(usuario)
    const usuarioCadastrado = new UsuarioCadastradoDto(usuario.email, this.contador)
    this.contador ++
    return usuarioCadastrado
  }
}

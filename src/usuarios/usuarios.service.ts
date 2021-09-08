import { Injectable } from '@nestjs/common';
import { NovoUsuarioDto, UsuarioCadastradoDto } from './application/dto';
import { Usuario } from './domain/entities/usuario';
import { UsuariosRepository } from './infra/repositories/usuarios.repository';

@Injectable()
export class UsuariosService {

  constructor(private usuariosRepository: UsuariosRepository) { }

  cadastraNovoUsuario(novoUsuarioDto: NovoUsuarioDto): UsuarioCadastradoDto {
    const { email, senha } = novoUsuarioDto
    const novoUsuario = new Usuario(email, senha)
    const usuario = this.usuariosRepository.cadastraNovoUsuario(novoUsuario)
    const usuarioCadastrado = new UsuarioCadastradoDto(usuario.email, usuario.id)
    return usuarioCadastrado
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NovoUsuarioDto, UsuarioCadastradoDto } from './application/dto';
import { Usuario } from './domain/entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) private repository: Repository<Usuario>,
  ) {}

  async cadastraNovoUsuario(
    novoUsuarioDto: NovoUsuarioDto,
  ): Promise<UsuarioCadastradoDto> {
    const { email, senha } = novoUsuarioDto;
    const novoUsuario = new Usuario();
    novoUsuario.email = email;
    novoUsuario.senha = senha;
    const usuario = await this.repository.save(novoUsuario);
    const usuarioCadastrado = new UsuarioCadastradoDto(
      usuario.email,
      usuario.id,
    );
    return usuarioCadastrado;
  }
}

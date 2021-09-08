import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Usuario } from "../../domain/entities/usuario";
import { UsuarioEntity } from "../entities/usuario.entity";

@Injectable()
export class UsuariosRepository {
  private usuarios: Usuario[]
  private contador: number

  constructor(
    @InjectRepository(UsuarioEntity)
    private repository: Repository<UsuarioEntity>,
  ) {
    this.usuarios = []
    this.contador = 1
  }

  async cadastraNovoUsuario(usuario: Usuario): Promise<Usuario> {
    const usuarioEntity = new UsuarioEntity()
    usuarioEntity.email = usuario.email
    usuarioEntity.senha = usuario.senha
    const usuarioCadastrado = await this.repository.save(usuarioEntity)
    return new Usuario(usuarioCadastrado.email, usuarioCadastrado.senha, usuarioCadastrado.id)
  }
}
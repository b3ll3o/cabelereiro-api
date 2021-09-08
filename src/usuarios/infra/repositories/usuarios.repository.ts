import { Injectable } from "@nestjs/common";
import { Usuario } from "../../../usuarios/domain/entities/usuario";

@Injectable()
export class UsuariosRepository {
  private usuarios: Usuario[]
  private contador: number

  constructor(){
    this.usuarios = []
    this.contador = 1
  }

  cadastraNovoUsuario(usuario: Usuario): Usuario {
    usuario.id = this.contador
    this.usuarios.push(usuario)
    this.contador ++
    return usuario
  }
}
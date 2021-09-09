import { NovoUsuarioDto, UsuarioCadastradoDto } from "../../../usuarios/application/dto";

export class UsuariosServiceMock {
  async cadastraNovoUsuario(novoUsuarioDto: NovoUsuarioDto): Promise<UsuarioCadastradoDto> {
    return Promise.resolve(new UsuarioCadastradoDto('email@email.com', 1))
  }
}
import { UsuarioCadastradoDto } from '../../../usuarios/application/dto';

export class UsuariosServiceMock {
  async cadastraNovoUsuario(): Promise<UsuarioCadastradoDto> {
    return Promise.resolve(new UsuarioCadastradoDto('email@email.com', 1));
  }
}

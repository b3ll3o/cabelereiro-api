import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NovoUsuarioDto, UsuarioCadastradoDto } from '../application/dto';
import { Usuario } from '../domain/entities/usuario.entity';
import { UsuariosServiceMock } from './mocks/usuario.service.mock';
import { UsuariosController } from '../usuarios.controller';
import { UsuariosService } from '../usuarios.service';

const EMAIL = 'email@email.com'
const SENHA = 'senha'

class NovoUsuarioDtoFactory {
  criaNovoUsuarioValido(){
    const novoUsuario = new NovoUsuarioDto()
    novoUsuario.email = EMAIL
    novoUsuario.senha = SENHA
    return novoUsuario
  }
}

class UsuarioCadastradoFactory {
  criaUsuarioCadastrado(){
    return new UsuarioCadastradoDto(EMAIL, 1)
  }
}

describe('UsuariosService', () => {
  let service: UsuariosService;
  let novoUsuarioFactory: NovoUsuarioDtoFactory
  let usuarioCadastradoFactory: UsuarioCadastradoFactory

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosController],
      providers: [UsuariosService]
    })
    .overrideProvider(UsuariosService)
    .useClass(UsuariosServiceMock)
    .compile();

    service = module.get<UsuariosService>(UsuariosService);
    novoUsuarioFactory = new NovoUsuarioDtoFactory()
    usuarioCadastradoFactory = new UsuarioCadastradoFactory()
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('deve cadastrar um novo usuario valido.', async () => {

    const novoUsuario = novoUsuarioFactory.criaNovoUsuarioValido()
    const usuario = await service.cadastraNovoUsuario(novoUsuario)

    expect(usuario).toBeDefined()
    expect(usuario.id).toBe(1)
    expect(usuario.email).toBe(EMAIL)
  })
});

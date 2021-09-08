import { Test, TestingModule } from '@nestjs/testing';
import { NovoUsuarioDto } from './application/dto';
import { UsuariosService } from './usuarios.service';

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

describe('UsuariosService', () => {
  let service: UsuariosService;
  let novoUsuarioFactory: NovoUsuarioDtoFactory

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariosService],
    }).compile();

    service = module.get<UsuariosService>(UsuariosService);
    novoUsuarioFactory = new NovoUsuarioDtoFactory()
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('deve cadastrar um novo usuario valido.', () => {
    const novoUsuario = novoUsuarioFactory.criaNovoUsuarioValido()
    const usuario = service.cadastraNovoUsuario(novoUsuario)

    expect(usuario).toBeDefined()
    expect(usuario.id).toBe(1)
    expect(usuario.email).toBe(EMAIL)
  })
});

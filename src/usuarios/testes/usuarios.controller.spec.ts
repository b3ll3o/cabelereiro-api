import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosController } from '../usuarios.controller';
import { UsuariosService } from '../usuarios.service';
import { UsuariosServiceMock } from './mocks/usuario.service.mock';

describe('UsuariosController', () => {
  let controller: UsuariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosController],
      providers: [UsuariosService]
    })
    .overrideProvider(UsuariosService)
    .useClass(UsuariosServiceMock)
    .compile();

    controller = module.get<UsuariosController>(UsuariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  test('deve ter um metodo para cadastrar um novo usuario', () => {
    expect(controller.cadastraNovoUsuario).toBeDefined()
  })
});

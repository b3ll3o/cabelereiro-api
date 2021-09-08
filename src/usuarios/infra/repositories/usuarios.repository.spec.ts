import { Test, TestingModule } from "@nestjs/testing";
import { UsuariosController } from "../../../usuarios/usuarios.controller";
import { UsuariosService } from "../../../usuarios/usuarios.service";
import { UsuariosRepository } from "./usuarios.repository";

describe('UsuariosRepository', () => {
  let service: UsuariosRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosController],
      providers: [UsuariosService, UsuariosRepository],
    }).compile();

    service = module.get<UsuariosRepository>(UsuariosRepository)
  })

  test('deve ser instanciado', () => {
    expect(service).toBeDefined()
  })
})
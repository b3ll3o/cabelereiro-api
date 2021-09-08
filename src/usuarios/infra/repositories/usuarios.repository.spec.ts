import { Test, TestingModule } from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuariosController } from "../../../usuarios/usuarios.controller";
import { UsuariosService } from "../../../usuarios/usuarios.service";
import { UsuarioEntity } from "../entities/usuario.entity";
import { UsuariosRepository } from "./usuarios.repository";

describe('UsuariosRepository', () => {
  let service: UsuariosRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosController],
      providers: [UsuariosService, UsuariosRepository],
      imports: [TypeOrmModule.forFeature([UsuarioEntity])]
    }).compile();

    service = module.get<UsuariosRepository>(UsuariosRepository)
  })

  test('deve ser instanciado', () => {
    expect(service).toBeDefined()
  })
})
import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { UsuariosRepository } from './infra/repositories/usuarios.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './infra/entities/usuario.entity';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService, UsuariosRepository],
  imports: [TypeOrmModule.forFeature([UsuarioEntity])]
})
export class UsuariosModule {}

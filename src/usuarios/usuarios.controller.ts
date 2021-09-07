import { Body, Controller } from '@nestjs/common';
import { NovoUsuarioDto, UsuarioCadastradoDto } from './application/dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  cadastraNovoUsuario(@Body() novoUsuarioDto: NovoUsuarioDto): UsuarioCadastradoDto {
    return this.usuariosService.cadastraNovoUsuario(novoUsuarioDto)
  }
}

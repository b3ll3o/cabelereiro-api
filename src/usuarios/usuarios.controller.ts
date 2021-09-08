import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { NovoUsuarioDto, UsuarioCadastradoDto } from './application/dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async cadastraNovoUsuario(@Body() novoUsuarioDto: NovoUsuarioDto): Promise<UsuarioCadastradoDto | BadRequestException> {
    try {
      return await this.usuariosService.cadastraNovoUsuario(novoUsuarioDto)
    } catch (e) {
      return new BadRequestException(e.message)
    }
  }
}

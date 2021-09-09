import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { NovoUsuarioDto, UsuarioCadastradoDto } from './application/dto';
import { UsuariosService } from './usuarios.service';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  @ApiOperation({ summary: 'Cria novo usuario' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async cadastraNovoUsuario(
    @Body() novoUsuarioDto: NovoUsuarioDto,
  ): Promise<UsuarioCadastradoDto | BadRequestException> {
    try {
      return await this.usuariosService.cadastraNovoUsuario(novoUsuarioDto);
    } catch (e) {
      return new BadRequestException(e.message);
    }
  }
}

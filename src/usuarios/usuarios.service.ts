import { Injectable } from '@nestjs/common';
import { UsuarioCadastradoDto } from './application/dto';

@Injectable()
export class UsuariosService {

  cadastraNovoUsuario(t: any){
    return new UsuarioCadastradoDto(undefined, undefined)
  }
}

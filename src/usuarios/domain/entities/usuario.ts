export class Usuario {
  constructor(private _email: string, private _senha: string) { }

  get email(){
    return this._email
  }
}
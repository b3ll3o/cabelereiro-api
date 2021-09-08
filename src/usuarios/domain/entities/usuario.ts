export class Usuario {
  constructor(private _email: string, private _senha: string, public id: number = 0) { }

  get email(){
    return this._email
  }
}
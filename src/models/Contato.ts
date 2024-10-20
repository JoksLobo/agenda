import * as enums from '../utils/enums/Contato'

class Contato {
  titulo: string
  categoria: enums.Categoria
  email: string
  telefone: string
  id: number

  constructor(
    titulo: string,
    categoria: enums.Categoria,
    email: string,
    telefone: string,
    id: number
  ) {
    this.titulo = titulo
    this.categoria = categoria
    this.email = email
    this.telefone = telefone
    this.id = id
  }
}

export default Contato

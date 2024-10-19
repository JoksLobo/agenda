import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      titulo: 'Edgar Poe',
      categoria: enums.Categoria.AMIGOS,
      email: 'teste@teste.com',
      telefone: '(11) 9-8564-9515'
    },
    {
      id: 2,
      titulo: 'Stephen King',
      categoria: enums.Categoria.FAMILIA,
      email: 'teste@teste.com',
      telefone: '(11) 9-8564-9515'
    },
    {
      id: 3,
      titulo: 'Clive Barker',
      categoria: enums.Categoria.SERVICOS,
      email: 'teste@teste.com',
      telefone: '(11) 9-8564-9515'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
      // indexDoContato = action.payload
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Já existe este contato!')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatoSlice.actions

export default contatoSlice.reducer

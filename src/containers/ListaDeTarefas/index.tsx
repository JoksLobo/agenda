import Contato from '../../components/Contato'
import * as S from './styles'

import * as enums from '../../utils/enums/Contato'

const contatos = [
  {
    titulo: 'Jocson de Souza',
    categoria: enums.Categoria.AMIGOS,
    email: 'jocson_herry@hotmail.com',
    fone: '(11) 9 6479-4591'
  },
  {
    titulo: 'Naty Whisky',
    categoria: enums.Categoria.FAMILIA,
    email: 'naty.wissy@hotmail.com',
    fone: '(11) 9 1234-5678'
  },
  {
    titulo: 'Pedro Amaro',
    categoria: enums.Categoria.PROFISSIONAL,
    email: 'pedro.a.maro@hotmail.com',
    fone: '(11) 9 4589-6597'
  },
  {
    titulo: 'Manoel Manual',
    categoria: enums.Categoria.SERVICOS,
    email: 'm.manual@hotmail.com',
    fone: '(11) 9 3251-6575'
  }
]

const ListaDeContato = () => (
  <S.Container>
    <p>2 contatos marcados como: &quot;Amigos&ldquo; e &quot;Todos&ldquo;</p>
    <S.Lista>
      {contatos.map((c) => (
        <li key={c.titulo}>
          <Contato
            titulo={c.titulo}
            categoria={c.categoria}
            email={c.email}
            fone={c.fone}
          />
        </li>
      ))}
    </S.Lista>
  </S.Container>
)

export default ListaDeContato

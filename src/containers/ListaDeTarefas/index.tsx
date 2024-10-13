import Contato from '../../components/Contato'
import { Titulo } from '../../components/Contato/styles'
import * as S from './styles'

const contatos = [
  {
    titulo: 'Jocson de Souza',
    categoria: 'Amigos',
    email: 'jocson_herry@hotmail.com',
    fone: '(11) 9 6479-4591'
  },
  {
    titulo: 'Naty Whisky',
    categoria: 'Familia',
    email: 'naty.wissy@hotmail.com',
    fone: '(11) 9 1234-5678'
  },
  {
    titulo: 'Pedro Amaro',
    categoria: 'Profissional',
    email: 'pedro.a.maro@hotmail.com',
    fone: '(11) 9 4589-6597'
  },
  {
    titulo: 'Manoel Manual',
    categoria: 'Serviços',
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

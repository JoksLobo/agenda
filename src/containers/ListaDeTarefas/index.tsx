import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Contato from '../../components/Contato'
import * as S from '../../styles'

const ListaDeContato = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens

    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'categoria') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.categoria === valor
        )
      }

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complemantacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'Todos') {
      mensagem = `${quantidade} contato(s) encontrado(s) como: Todos ${complemantacao}`
    } else {
      mensagem = `${quantidade} tarefas encontradas como: "${`${criterio}=${valor}`} ${complemantacao}"`
    }
    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <S.MainContainer>
      <S.Titulo as="p">{mensagem}</S.Titulo>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
      <S.Lista>
        {contatos.map((c) => (
          <li key={c.titulo}>
            <Contato
              titulo={c.titulo}
              categoria={c.categoria}
              email={c.email}
              telefone={c.telefone}
              id={c.id}
            />
          </li>
        ))}
      </S.Lista>
    </S.MainContainer>
  )
}

export default ListaDeContato

import { useState } from 'react'
import * as S from './styles'

type Props = {
  titulo: string
  categoria: string
  email: string
  fone: string
}

const Contato = ({ titulo, categoria, email, fone }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag categoria={categoria}>{categoria}</S.Tag>
      <S.Descricao>
        <S.Email>{email}</S.Email>
        <S.Fone>{fone}</S.Fone>
      </S.Descricao>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarERemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarERemover>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => setEstaEditando(true)}>
              Editar
            </S.BotaoEditar>
            <S.BotaoCancelarERemover>Remover</S.BotaoCancelarERemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato

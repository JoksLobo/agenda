import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/contatos'
import * as S from './styles'
import ContatoClass from '../../models/Contato'
import { BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  titulo,
  categoria,
  email: emailOriginal,
  telefone: foneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setFone] = useState('')

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (foneOriginal.length > 0) {
      setFone(foneOriginal)
    }
  }, [emailOriginal, foneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setFone(foneOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag categoria={categoria}>{categoria}</S.Tag>
      <S.Descricao>
        <S.Email
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        >
          {email}
        </S.Email>
        <S.Fone
          disabled={!estaEditando}
          value={telefone}
          onChange={(evento) => setFone(evento.target.value)}
        >
          {telefone}
        </S.Fone>
      </S.Descricao>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    email,
                    telefone,
                    id: id,
                    titulo,
                    categoria
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarERemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarERemover>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => setEstaEditando(true)}>
              Editar
            </S.BotaoEditar>
            <S.BotaoCancelarERemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarERemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato

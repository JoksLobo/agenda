import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'
import * as enums from '../../utils/enums/Contato'

type TagProps = {
  categoria?: enums.Categoria
}

function retornaCorDeFundo(props: TagProps): string {
  if ('categoria' in props) {
    if (props.categoria === enums.Categoria.AMIGOS) return variaveis.azul
    if (props.categoria === enums.Categoria.FAMILIA) return variaveis.rosa
    if (props.categoria === enums.Categoria.PROFISSIONAL)
      return variaveis.amarelo
    if (props.categoria === enums.Categoria.SERVICOS) return variaveis.marrom
  }
  return ''
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  display: inline-block;
`

export const Descricao = styled.div`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: grid;
  margin-top: 8px;
  margin-bottom: 16px;
`
export const Email = styled.textarea`
  height: 32px;
  width: 100%;
  border: none;
  resize: none;
`
export const Fone = styled.textarea`
  height: 32px;
  width: 100%;
  border: none;
  resize: none;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarERemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
export const BotaoEditar = styled(Botao)`
  background-color: ${variaveis.laranja};
`

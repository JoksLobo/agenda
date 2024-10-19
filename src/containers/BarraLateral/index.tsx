import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'
import { Campo } from '../../styles'
import { Botao } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Categoria.AMIGOS}
                criterio="categoria"
                legenda="Amigos"
              />
              <FiltroCard
                valor={enums.Categoria.FAMILIA}
                criterio="categoria"
                legenda="Familia"
              />
              <FiltroCard
                valor={enums.Categoria.PROFISSIONAL}
                criterio="categoria"
                legenda="Profissional"
              />
              <FiltroCard
                valor={enums.Categoria.SERVICOS}
                criterio="categoria"
                legenda="Serviços"
              />
              <FiltroCard criterio="Todos" legenda="Todos" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            Voltar à lista de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral

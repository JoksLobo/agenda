import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="Amigos" contador={1} />
        <FiltroCard legenda="Familia" contador={2} />
        <FiltroCard legenda="Profissional" contador={3} />
        <FiltroCard legenda="Serviços" contador={4} />
        <FiltroCard ativo legenda="Todos" contador={5} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral

import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Douglas</Titulo>
      <Paragrafo fontSize={16} tipo="secundario">
        DouglasRibeiro84
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Dev FrontEnd
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar

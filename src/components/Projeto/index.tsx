import Titulo from '../Titulo'
import Paragrafo from '../Paragrafo'

import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJs</Paragrafo>
    <LinkBotao>Visualisar</LinkBotao>
  </Card>
)

export default Projeto

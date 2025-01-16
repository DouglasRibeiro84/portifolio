import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '40px'};
  padding: 8px;
  color: white;
`
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: blue;
  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao fontSize="10px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal>
        aaa<span>Aaaaaaaain</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste

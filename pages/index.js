//import styled from 'styled-components';

// IMPORT SEM {} É O EXPORT DEFAULT 
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
// PARA EXPORTA OS COMPONENTES INDIVIDUALMENTE
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCammons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelation';

//const Title = styled.h1`
//  font-size: 50px;
//  color: ${({ theme }) => theme.colors.primary};
//`

function ProfileSideBar(propriedades) {
  return (
    <Box>
      {/* AS {} SÃO DO REACT E O JAVASCRIPT É O RESTO, 
    ESSA FORMA DE PASSAR VARIAVEL É DO JAVASCRIPT, 
    UNICA COISA DO REACT É AS {}  */}
      <img src={`https://github.com/${propriedades.getUser}.png `} style={{ borderRadius: '8px' }} />
    </Box>

  )
}

export default function Home() {

  // PARA PASSAR UM VALOR DE UMA VARIAVEL PARA DENTRO DO SRC 
  // É NECESSESARO O USO DOS {}
  const getUsers = 'Windstorm08';
  const devs = ['peas', 'omariosouto', 'marcobrunodev']

  return (

    <>
      {/* NÃO TEM COMO COLOCAR DENTRO DA MESMA RAIZ DUAS TAGS DO HTML 
      POR ISSO TEMOS O FRAGMENTS QUE EMGLOBA AS TAGS, MAS NAO TEM NENHUM VALOR SEMANTICO <> */}
      <AlurakutMenu />

      <MainGrid>

        {/* ultilizamos double {{}} que a primeira é onde a estilização 
      ficará e o que esta dentro é como objeto  */}

        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          {/* O PRIMEIRO getUser É O PARAMETRO PASSADO PARA FUNÇÃO E O SEGUNDO ENTRE {} É A VARIAVEL */}
          <ProfileSideBar getUser={getUsers} />

        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box >
            <h1 className="title">
            Bem vindos(a)
            </h1>
          </Box>
          <Box>
            <OrkutNostalgicIconSet/>
          </Box>
        </div>

        <div className="profileRelationArea" style={{ gridArea: 'profileRelationArea' }}>
          < ProfileRelationsBoxWrapper>

            <h2 className="smallTitle">
              Pessoas da Comunidade ({devs.length})
            </h2>
            {/*(map) ENTRAR EM CADA ITEM DA ARRAY E MODIFICA DA 
            FORMA QUE QUISERMOS E RETORNAR UM VALOR DIFERENTE 
            COMO ABAIXO RETORNAMOS
             LI E PASSANDO COM {} E ELE SEMPRE RETORNA 
             A MESMA QUANTIDADE DA NOSSA ARRAY  */}
            <ul>
              {devs.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual} >
                      <img src={`https://github.com/${itemAtual}.png `} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

        </div>

      </MainGrid>

    </>
  )
}

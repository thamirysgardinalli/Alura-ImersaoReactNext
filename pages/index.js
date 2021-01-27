import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'
import Head from 'next/head'
import {useRouter} from 'next/router';
import Input from '../src/components/Input'
import Button from '../src/components/Button'
import QuizContainer from '../src/components/QuizContainer'

//Permite que seja criado o component como a função abaixo automaticamente

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

/*function Title(props){ //props -> propcidades / propriedades
  return (
    <h1>
      {props.children}
    </h1>
  )
} */

/*const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`
*/

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz Alura - Friends</title>
      </Head>
      <QuizContainer>
        <QuizLogo>

        </QuizLogo>
        <Widget>
          <Widget.Header>
            <h1>Friends Quiz - The One With a Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name${name}`);
              console.log('Fazendo uma submissão por meio do React');
              }
              }>
              <p>Você conhece tudo sobre Friends? Teste seus conhecimentos e relembre alguns momentos da série.</p>
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Preencha seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <h1>Quiz da Galera</h1>
          <p>Em breve</p>
        </Widget>
        <Footer>

        </Footer>
      </QuizContainer>
      <GitHubCorner projectUrl='https://github.com/thamirysgardinalli'/>
    </QuizBackground>
  )
}

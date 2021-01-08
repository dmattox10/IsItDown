import { Row, Col, Container } from 'reactstrap'
import { Route } from 'react-router-dom'
import { downContext } from './contexts/downContext'
import { useDown } from './hooks/useDown'
import Message from './components/Message'
import Banner from './components/Banner'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Success from './components/Success'

const App = props => {
  const [stats, addUrl, message, resetAll, info] = useDown()
  return (
    <div className="App">
      <downContext.Provider value={{stats, addUrl, message, resetAll, info}}>
        <Message />
        <Row>
          <Container>
            <Banner />
          </Container>
        </Row>
        <Container>
          <Row>
            <Col xs='3'>
              <Stats stats={ stats }/>
            </Col>
            <Col xs='9'>
              <Route exact path='/' component={ Hero } />
              <Route exact path='/success' component={ Success } />
            </Col>
          </Row>
        </Container>
        <br />
      </downContext.Provider>
    </div>
  )
}

export default App

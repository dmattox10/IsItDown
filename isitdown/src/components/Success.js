import { Card, CardTitle, Row, Col, Button } from 'reactstrap'
import { useContext } from 'react'
import { downContext } from '../contexts/downContext'

const Success = props => {

    const { message, resetAll } = useContext(downContext)
    return (
        <Row>
            <Col xs='12'>
            <Card body>
                    <CardTitle><h3>Here's what I found:</h3></CardTitle>
                    <div className='centered'>
                        <h3>{}
                        </h3>
                        <h4>{message.text}</h4>
                        <Button onClick={resetAll}>Reset!</Button>
                    </div>
                </Card>
            </Col>
        </Row>
    )
}

export default Success
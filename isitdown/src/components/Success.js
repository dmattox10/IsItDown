import { Card, CardTitle, Row, Col, Button } from 'reactstrap'
import { useContext } from 'react'
import { downContext } from '../contexts/downContext'
import Up from './Up'
import Down from './Down'

const Success = props => {

    const { message, resetAll, info } = useContext(downContext)
    const { url, up, timesDown, time } = info
    console.log(info)
    return (
        <Row>
            <Col xs='12'>
            <Card body>
                    <CardTitle><h3>Here's what I found:</h3></CardTitle>
                    <div className='centered'>
                        <div>{url} : {up ? <Up time={time} /> : <Down timesDown={timesDown} />}</div>
                        <h4>{message.text}</h4>
                        <Button onClick={resetAll}>Reset!</Button>
                    </div>
                </Card>
            </Col>
        </Row>
    )
}

export default Success
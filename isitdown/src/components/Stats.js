import { Card, CardTitle, CardText, Row, Col } from 'reactstrap'
import Counter from './Counter'
const Stats = props => {
    return (
        <Row className='centered'>
            <Col xs='12'>
                <Card body>
                    <CardTitle><h3>Usage Stats:</h3></CardTitle>
                    <CardText>Total sites checked:</CardText><br />
                    <Counter number={props.stats.total} />
                    <CardText>Total visits to this tool:</CardText>
                    <Counter number={props.stats.visits} />
                </Card>
            </Col>
        </Row>
    )
}

export default Stats
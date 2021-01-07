import { Card, CardTitle, Row, Col, Form, FormGroup, Label, Input, FormText, CustomInput, Button } from 'reactstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useContext, useEffect } from 'react'
import { downContext } from '../contexts/downContext'
const Hero = props => {

    const { addUrl, message } = useContext(downContext)

    const formik = useFormik({
        initialValues: {
            longUrl: '',
        },
        validationSchema: Yup.object({
            longUrl: Yup.string()
            .required('This field is required.'),
        }),
        onSubmit: values => {
            addUrl(values)
        },
    })

    return (
        <Row>
            <Col xs='12'>
            <Card body>
                    <CardTitle><h3>This is where the magic happens!</h3></CardTitle>
                    <Card style={{border: 'none'}}>
                        <Form onSubmit={formik.handleSubmit}>
                            <FormGroup row>
                                <Label for='longUrl' sm={3} size='lg'>URL to check</Label>
                                <Col sm={9}>
                                    <Input type='text' name='longUrl' id='longUrl' value={formik.values.longUrl} placeholder='youtube.com' bsSize='lg' className={formik.touched.longUrl && !formik.errors.longUrl ? 'form-control is-valid' : 'form-control is-invalid'} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched.longUrl && formik.errors.longUrl ? <div className='invalid-feedback'>{formik.errors.longUrl}</div> : null}
                                </Col>
                            </FormGroup>
                            <Row>
                                <Col sm={12}>
                                    {message.text !== null ? <h5>{message.text}</h5> : null}
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={2}>
                                    <Button type='submit' color='primary'>Do it!</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Card>
            </Col>
        </Row>
    )
}

export default Hero
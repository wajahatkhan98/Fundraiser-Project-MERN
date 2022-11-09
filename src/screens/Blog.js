import { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { BlogCard } from '../components'
function Blog() {

    return <>
        <section>
            <Container >
                <div className='first-section-with-title'>
                    <h3 className='common-heading'>BLOG</h3>
                </div>
                <Row className='mb-5 gy-5'>
                    <Col lg={12}>
                      <BlogCard/>  
                    </Col>
                    <Col lg={12}>
                      <BlogCard/>  
                    </Col>
                    <Col lg={12}>
                      <BlogCard/>  
                    </Col>
                    <Col lg={12}>
                      <BlogCard/>  
                    </Col>
                </Row>
            </Container>
        </section>

    </>
}

export default Blog
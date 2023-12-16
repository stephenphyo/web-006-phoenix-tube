import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

/*** Component Imports  ***/
import CategoriesBar from 'components/CategoriesBar';
import Video from 'components/Video';

function HomeScreen() {
    return (
        <Container className='align-center justify-content-center'>
            <CategoriesBar />
            <Row>
                {
                    [...new Array(20)].map(() => (
                        <Col lg={3} md={6} sm={12}>
                            <Video />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}

export default HomeScreen;
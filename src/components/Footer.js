import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        <p>Visit my <a href="https://www.linkedin.com/in/merilin-v%C3%B5rk-ba1983190/">LinkedIn profile</a></p>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        <p>This <a href="https://github.com/Merilinv/my-portfolio">site</a> was made by Merilin Võrk with the help of <a href="https://www.youtube.com/playlist?list=PLnpdZyv-BjINbUjmTUsyziHz_4fa9hM5G">Garrett Love.</a></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;
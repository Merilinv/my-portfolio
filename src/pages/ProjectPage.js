import React from 'react';

import Projects from '../components/Projects';
import { Container, Row } from 'react-bootstrap';

function ProjectPage(props){
    return(
        <Container className="p-0" fluid={true}>
             <Projects/>
        </Container>
       
    );
}

export default ProjectPage;
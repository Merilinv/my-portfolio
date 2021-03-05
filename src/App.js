import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title: 'Merilin Võrk portfolio',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'Projects', path: '/projects'},
        { title: 'About', path: '/about'}
      ],
      //objects for top level 
      home: {
        title: 'Welcome, I am Merilin',
        subTitle: "I'm a Computer Science student.",
        text: "Let me tell you a little bit more about myself"
      },
      projects: {
        title: 'Projects',
        subTitle: "Here's what I have learned so far"
      },
      about: {
        title: 'About Me',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus ultricies augue at lacinia. Proin vel nisl porttitor, consequat orci eu, elementum arcu. Vivamus condimentum finibus ipsum eget cursus. Praesent pretium scelerisque sem, ac pellentesque mauris. Maecenas ultrices lacus eget mi hendrerit porttitor. Duis eget dolor sed nibh venenatis porta. Sed iaculis, libero in laoreet mollis, dolor diam fermentum tortor, in lobortis tellus erat nec augue. "
      }
    }
  }

  render(){

    return (
        <Router>
          <Container className="p-0" fluid={true}>
            
            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>Merilin Võrk</Navbar.Brand>

              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/projects">Projects</Link>
                  <Link className="nav-link" to="/about">About</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Footer />
  
          </Container>
        </Router>
      );
  } 
}

export default App;

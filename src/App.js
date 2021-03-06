import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';

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
        title: "Hi, I'm Merilin!",
        subTitle: "I'm a Computer Science student.",
        text: "Here's what I have learned so far"
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

            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
            <Route path="/projects" render={() => <ProjectPage title={this.state.projects.title} subTitle={this.state.projects.subTitle}/>} />
            <Route path="/about" render={() => <AboutPage title={this.state.about.title} text={this.state.about.text}/>}/>
            <Footer />
  
          </Container>
        </Router>
      );
  } 
}

export default App;

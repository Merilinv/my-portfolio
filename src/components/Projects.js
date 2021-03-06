import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';

import chickenKarma from '../assets/images/chickenKarma.png';
import webStore from '../assets/images/webStore.png';


class Projects extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            items: [
                {
                    id: 0,
                    title: 'Chicken Karma',
                    subTitle: 'A role-playing Phaser game demo created by me and three of my fellow students. My contribution to the project: development of interface and additional functionalities, documentation, testing, communicating with the client, organizing tasks. I learned about team management, version control, the development process, and working with frameworks.',
                    imgSrc: chickenKarma,
                    projectLink: 'https://raimop.github.io/chicken-karma/',
                    gitHubLink: 'https://github.com/raimop/chicken-karma',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Web Store App',
                    subTitle: 'Created as part of an application programming course. I learned about creating a React app, communicating with server, JSX and CSS.',
                    imgSrc: webStore,
                    projectLink: 'https://merilinrp2019.herokuapp.com/',
                    gitHubLink: 'https://github.com/Merilinv/RakendusteProg2019',
                    selected: false
                },
            ]
        }
    }
    handleCardClick = (id, card) => {
        
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}
export default Projects;
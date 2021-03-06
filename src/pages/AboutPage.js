import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

import merilin from "../assets/images/merilin.png";
import merilinAlt from "../assets/images/merilin2.png";

function AboutPage(props){
    return(
        <div>
            <Hero title={props.title}/>
            <Content>
                <a className="m-about-img" href="https://www.linkedin.com/in/merilin-v%C3%B5rk-ba1983190/" target="_blank" rel="noopener noreferrer">
                    <img className="image-main" src={merilin} alt={merilin}></img>
                    <img className="image-hover" src={merilinAlt} alt={merilinAlt}></img>
                </a >
                
                <div className="m-about-text">
                    <p>Hello, my name is Merilin. I'm currently a penultimate year student at Tallinn University, studying Computer Science.</p>                
                    
                    <p>I am creative type of a person and also very eager to explore what interests me - if I have a question, I'll find the answer!
                        I dream of working in the tech industry with a cooperative team and on something that makes a difference. 
                    </p>   
                    <p> I feel that I am most 
                        suitable for a position that requires <b>communication, planning, structuring, creativity, and understanding of others</b> .
                    </p> 
                    <p>Currently, I am writing and developing my bachelour's thesis on design and development of a web-based art portfolio 
                        - as I am also hobby artist, but hoping to bind my IT knowledge and urge to create something together.</p>
                    
                </div>
                    <div className="m-traits">
                       
                        <ul>
                        <p>I am learning: </p>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>HTML5</li>
                            <li>Java</li>
                            <li>Interaction design</li>
                            <li>GitHub</li>
                        </ul>
                    
                        
                        <ul>
                        <p>I like: </p>
                            <li>Painting</li>
                            <li>Nature</li>
                            <li>Badminton</li>
                            <li>Learning guitar</li>
                            <li>Personal growth</li>
                        </ul>
                    </div>
                   
                
            </Content>
        </div>
    );
}

export default AboutPage;
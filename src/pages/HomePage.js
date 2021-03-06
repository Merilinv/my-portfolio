import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

function HomePage(props){
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Projects/>
        </div>
        
    );
}

export default HomePage;
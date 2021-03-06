import React from 'react';
import {useSpring, animated} from 'react-spring';

function CardInfo(props){

    const style = useSpring({opacity: 1, from:{opacity:0}});
    
    return(
        <animated.div className="m-card-info" style={style}>
            <p className="m-card-title">{props.title}</p>
            <p className="m-card-sub-title">{props.subTitle}</p>
            <a className="m-card-link" href={props.projectLink} target="_blank" rel="noopener noreferrer">View Project</a>
            <a className="m-card-link" href={props.gitHubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        </animated.div>
    )
}

export default CardInfo;



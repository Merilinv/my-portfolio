import React from 'react';

import CardInfo from '../components/CardInfo';

function Card(props){
    return(
        <div className="d-inline-block m-card" onClick={(e) => props.click(props.item)}>
            <img className="m-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} projectLink={props.item.projectLink} gitHubLink={props.item.gitHubLink}/>}
        </div>
    );
}

export default Card;
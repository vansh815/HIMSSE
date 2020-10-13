import React from 'react';

import './Card.css';

function Card(props) {
    return (
        <div className={props.className}>
          <div className="small-div">
            <i className={props.className}></i>
            <img src={props.img} alt=''/>
          </div>
    
          <div className="big-div">
            <span className="card-title">
              {props.title}
            </span>
            <br />
            <span className="card-desc">
              {props.description}
            </span>
          </div>
        </div>
      )
}

export default Card

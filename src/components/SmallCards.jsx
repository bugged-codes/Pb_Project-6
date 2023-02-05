import React from "react";

const SmallCards = (props) =>{

    return(
        <div className="samll-cards">
            <img src={props.img} alt="ignore this" />
            <h1>{props.h1}</h1>
            <p>{props.para1}</p>
        </div>
    )
};

export default SmallCards;
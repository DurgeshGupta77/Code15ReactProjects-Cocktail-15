import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, image, info, glass }) => {
    return <article className="cocktail">
        <div className="img-container">
            <img src={image} alt={name} />
        </div>
        <div className="cocktail-detail">
            <h3>{name}</h3>
            <h4>{glass}</h4>
            <h5>{info}</h5>
            <Link to={`/cocktail/${id}`} className="btn">Details</Link>
        </div>
    </article>
}

export default Cocktail;
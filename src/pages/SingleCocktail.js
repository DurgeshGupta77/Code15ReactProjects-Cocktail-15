import React from "react";
import { useParams, Link } from "react-router-dom";

const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

const SingleCocktail = () => {
    const { id } = useParams();

    return <h1>{id}</h1>
}

export default SingleCocktail;
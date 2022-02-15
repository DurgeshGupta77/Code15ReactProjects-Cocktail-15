import React, { useEffect, useState, useCallback } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);

    const fetchSingleCocktail = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(`${url}${id}`);
            const list = await response.json();
            if (list.drinks) {
                const { strDrink: name, strDrinkThumb: image, strAlcoholic: info, strCategory: category, strGlass: glass, strInstructions: instructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } = list.drinks[0];
                const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];
                const newCocktail = {
                    name, image, info, category, glass, instructions, ingredients
                }
                setCocktail(newCocktail);
                setLoading(false);
            }
            else {
                setCocktail(null);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }, [id])

    useEffect(() => {
        fetchSingleCocktail();
    }, [id, fetchSingleCocktail])

    if (loading) {
        return <Loading />
    }

    if (!cocktail) {
        return <section className="no-cocktail">
            <h1>No Cocktail to Display</h1>
        </section>
    }

    const { name, image, category, glass, info, ingredients, instructions } = cocktail;

    return <section className="single-cocktail-section">
        <button className="return-back-btn"><Link to="/" className="return-link">Back to Home Page</Link></button>
        <h1 className="cocktail-name">{name}</h1>
        <div className="single-cocktail-body">
            <div className="single-cocktail-img">
                <img src={image} alt={name} className="image" />
            </div>

            <div className="cocktail-all-container">
                <p>
                    <span className="cocktail-info-header">Name:</span>
                    {name}
                </p>
                <p>
                    <span className="cocktail-info-header">Category:</span>
                    {category}
                </p>
                <p>
                    <span className="cocktail-info-header">Glass:</span>
                    {glass}
                </p>
                <p>
                    <span className="cocktail-info-header">Info:</span>
                    {info}
                </p>
                <p>
                    <span className="cocktail-info-header">Instructions:</span>
                    {instructions}
                </p>
                <p>
                    <span className="cocktail-info-header">Ingredients:</span>
                    {ingredients.map((ingredient, index) => {
                        return ingredient ? <span key={index}>{ingredient}</span> : null
                    })}
                </p>
            </div>
        </div>
    </section>
}

export default SingleCocktail;
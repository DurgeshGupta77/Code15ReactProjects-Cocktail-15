import React from "react";
import Loading from "./Loading";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../context";

const CocktailList = () => {
    const { cocktails, isLoading } = useGlobalContext();
    if (isLoading) {
        return <Loading />
    }

    if (cocktails.length < 1) {
        return <h1 className="no-search-result-txt">Sorry! No results matched your search criteria</h1>
    }

    return <section className="cocktails-section">
        <h1>Cocktail</h1>
        <div className="cocktails-center">
            {
                cocktails.map((cocktail) => {
                    return <Cocktail key={cocktail.id} {...cocktail} />
                })
            }
        </div>
    </section>
}

export default CocktailList;
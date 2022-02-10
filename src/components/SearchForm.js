import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
    const { searchTerm, setSearchTerm } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return <section className="search-form-section">
        <form className="search-form" onSubmit={handleSubmit}>
            <label htmlFor='searchTerm'><p>Search for your Favourite Drink here! Cheers Mate!</p></label>
            <input type='text' id="searchTerm" name="searchTerm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </form>
    </section>
}

export default SearchForm;
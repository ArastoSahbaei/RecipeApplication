import React, { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce'
import { useHistory } from 'react-router-dom';
import service from '../../shared/api/service/service'
import foodImg from '../../shared/images/food.jpg'
import './SearchRecipe.css'

export const SearchRecipe = () => {
    const history = useHistory();
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [results, setResults] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(
        () => {
            if (debouncedSearchTerm) {
                setIsSearching(true);
                service.searchService(debouncedSearchTerm).then(results => {
                    setIsSearching(false);
                    setResults(results.data);
                });
            } else {
                setResults([]);
            }
        },
        [debouncedSearchTerm]
    );

    const directToRecipeView = (state: any) => {
        return history.push(`/recipe/${state._id}`, state);
    }

    function getRandomArbitrary(min: number, max: number) {
        return Math.trunc(Math.random() * (max - min) + min)
    }

    return (
        <div className="searchRecipeContainer">
            <div className="searchRecipeContent">
                <h1 onClick={() => history.push(`/home`)}>Le Chef</h1>
                <h4 onClick={() => history.push(`/signin`)}> Sign in</h4>
                <input placeholder="Search Recipe" onChange={e => setSearchTerm(e.target.value)} />
                {isSearching && <div>Searching ...</div>}
                {results.map(recipeResult => (
                    <div key={recipeResult._id} onClick={() => directToRecipeView(recipeResult)}>
                        <img src={foodImg} alt={"Could not load image"} style={{ width: 50, height: 50 }} />
                        <h3 >{recipeResult?.title}</h3>
                        <p>Arasto Sahbaei</p>
                        <p>{getRandomArbitrary(1, 10)}/10</p>
                        <hr />
                    </div>
                ))}
                {/* <p>See all results for "{searchTerm}"</p> */}
            </div>
        </div>
    );
}
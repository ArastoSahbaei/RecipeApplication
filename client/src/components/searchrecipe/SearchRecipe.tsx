import React, { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce'
import service from '../../shared/api/service/service'
import './SearchRecipe.css'

export const SearchRecipe = () => {
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

    return (
        <div className="searchRecipeContainer">
            <div className="searchRecipeContent">
                <h1>Le Chef</h1>
                <input placeholder="Search Recipe" onChange={e => setSearchTerm(e.target.value)} />
                {isSearching && <div>Searching ...</div>}
                {results.map(recipeResult => (
                    <div key={recipeResult._id}>
                        <span>{recipeResult?.title} | {recipeResult?._id}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
import React, { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce'

export const SearchRecipe = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [results, setResults] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(
        () => {
            if (debouncedSearchTerm) {
                setIsSearching(true);
                searchCharacters(debouncedSearchTerm).then(results => {
                    setIsSearching(false);
                    setResults(results);
                });
            } else {
                setResults([]);
            }
        },
        [debouncedSearchTerm]
    );

    return (
        <div>
            <input placeholder="Search Recipe" onChange={e => setSearchTerm(e.target.value)} />
            {isSearching && <div>Searching ...</div>}
            {results.map(resultini => (
                <div key={resultini.id}>
                    <h4>{resultini?.title}</h4>
                </div>
            ))}
        </div>
    );
}

function searchCharacters(search: any) {
    return fetch(
        `http://localhost:3001/recipe/`,
        {
            method: 'GET'
        }
    )
        .then(r => r.json())
        .then(r => (r))
        .catch(error => {
            console.error(error);
            return [];
        });
}

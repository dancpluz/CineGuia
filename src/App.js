import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';
import BRFlag from './brazil.svg';
import USFlag from './unitedstates.svg';

const API_URL = 'http://www.omdbapi.com?apikey=cc4d76f3';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [lang, setLang] = useState('en');
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('man')
    }, []);

    return (
        <div className="app">
            <img className="flags" src={lang == 'br' ? BRFlag : USFlag} alt="lang" 
            onClick={() => lang == 'br' ? setLang('en') : setLang('br')}
            />
            <h1 onClick={() => {searchMovies('man'); setSearchTerm('')}}>CineGuia</h1>
            <div className="search">
                <input
                    placeholder={lang == 'br' ? "Procurar" : "Search"}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) =>
                            <MovieCard movie={movie} lang={lang}/>
                        )}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>{lang == 'br' ? "Não encontrado" : "Not found"}</h2>
                    </div>
                )}
        </div>
    );
}

export default App;
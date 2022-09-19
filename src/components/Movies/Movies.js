import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import HorizontalSeparator from '../HorizontalSeparator/HorizontalSeparator';
import poster from '../../images/poster.png';
import './Movies.css';
import { useState } from 'react';

function Movies() {

    const [isLoading, setIsLoading] = useState(false);

    const moviesArray = [{
        id: 1,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: true
    },
    {
        id: 2,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: true
    },
    {
        id: 3,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: false
    },
    {
        id: 4,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: false
    },
    {
        id: 5,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: false
    },
    {
        id: 6,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: true
    },
    {
        id: 7,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: false
    },
    {
        id: 8,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: true
    },
    {
        id: 9,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: false
    },
    {
        id: 10,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: false
    },
    {
        id: 11,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: false
    },
    {
        id: 12,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: true
    }
    ];

    const handleSetIsLoading = () => {

    };

    return (
        <div className="movies">
            <SearchForm />
            <HorizontalSeparator />
            <MoviesCardList moviesArray={ moviesArray } isUserPage={ false } isLoading={ isLoading } />
        </div>
    );
}

export default Movies;
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import HorizontalSeparator from '../HorizontalSeparator/HorizontalSeparator';
import { useState } from 'react';

function SavedMovies() {
    const [isDataRecieved, setIsDataRecieved] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [savedMoviesArray, setSavedMoviesArray] = useState(JSON.parse(localStorage.getItem("savedMovies")));

    const handleChangeIsLoading = (isLoading) => {
        setIsLoading(isLoading);
    };

    const handleChangeIsDataRecieved = (isDataRecieved) => {
        setIsDataRecieved(isDataRecieved);
    };

    const handleChangeMovieSavingStatus = () => {

    };

    const handleGetMoviesArray = () => {
        setSavedMoviesArray(localStorage.getItem("savedMovies"));
    };

    return (
        <div className="saved-movies">
            <SearchForm handleGetMoviesArray={handleGetMoviesArray} onLoad={handleChangeIsLoading} onDataReceive={handleChangeIsDataRecieved}/>
            <HorizontalSeparator />
            {savedMoviesArray && (
                <MoviesCardList moviesArray={savedMoviesArray} isLoading={isLoading} isDataRecieved={isDataRecieved} currentMoviesAmount={undefined} handleChangeMovieSavingStatus={handleChangeMovieSavingStatus} savedMoviesArray={savedMoviesArray} isMainMoviePage={false} />
            )}
        </div>
    );
}

export default SavedMovies;
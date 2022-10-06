import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import HorizontalSeparator from '../HorizontalSeparator/HorizontalSeparator';
import MoreButton from '../MoreButton/MoreButton';
import { getMovies } from '../../utils/MoviesApi';
import './Movies.css';
import React, { useEffect, useState } from 'react';
import { filterMovies } from '../../utils/filter';

function Movies({ savedMoviesArray, handleGetAllSavedMovies, handleChangeMovieSavingStatus, handleChangeIsLoading, isLoading, handleBadTokenLogOut }) {
    
    const [moviesArray, setMoviesArray] = useState(JSON.parse(localStorage.getItem('movies')) || null);
    const [moviesDisplaySettings, setMoviesDisplaySettings] = useState({ initilalAmount: 0, increment: 0 });
    const [currentMoviesAmount, setCurrentMoviesAmount] = useState(0);
    const [isDataRecieved, setIsDataRecieved] = useState(localStorage.getItem('movies') ? true : false);

    useEffect(() => {
        handleChangeMoviesSettings();
    }, []);

    const handleChangeMoviesSettings = () => {
        if (window.innerWidth < 768) {
            setMoviesDisplaySettings({ initilalAmount: 5, increment: 2 });
            currentMoviesAmount === 0 && setCurrentMoviesAmount(5);
        } else if (window.innerWidth < 1280) {
            setMoviesDisplaySettings({ initilalAmount: 8, increment: 2 });
            currentMoviesAmount === 0 && setCurrentMoviesAmount(8);
        } else {
            setMoviesDisplaySettings({ initilalAmount: 12, increment: 3 });
            currentMoviesAmount === 0 && setCurrentMoviesAmount(12);
        }
    };

    const handleGetAllMoviesArray = (searchValue, isShortMoviesIncluded) => {
        return getMovies().then((movies) => {
            if (!movies) {
                throw new Error('Ничего не найдено');
            }

            const moviesAfterFilter = filterMovies(searchValue, isShortMoviesIncluded, movies);

            localStorage.setItem('movies', JSON.stringify(moviesAfterFilter));
            localStorage.setItem('searchMovies', searchValue);
            localStorage.setItem('isShortMoviesIncluded', isShortMoviesIncluded);

            setCurrentMoviesAmount(moviesDisplaySettings.initilalAmount);
            setMoviesArray(moviesAfterFilter);
            setIsDataRecieved(true);
        });
    };

    const handleChangeCurrentMoviesAmount = () => {
        if (!moviesArray) {
            return;
        }
        if (moviesArray.length === currentMoviesAmount) {
            return
        }
        const remainderMovies = moviesArray.length % moviesDisplaySettings.increment;
        if (moviesArray.length - currentMoviesAmount < moviesDisplaySettings.increment) {
            setCurrentMoviesAmount(currentMoviesAmount + remainderMovies);
        }
        else {
            setCurrentMoviesAmount(currentMoviesAmount + moviesDisplaySettings.increment);
        }
    }

    const handleChangeIsDataRecieved = (isDataRecieved) => {
        setIsDataRecieved(isDataRecieved);
    };

    const handleChangeMoviesSettingsWithTimeout = () => {
        const timeOut = setTimeout(handleChangeMoviesSettings, 5000);
    }

    useEffect(() => {
        handleChangeMoviesSettings();
        handleGetAllSavedMovies();
    }, [isDataRecieved]);

    useEffect(() => {
        // let timeOut;
        window.addEventListener('resize', handleChangeMoviesSettingsWithTimeout);

        return () => {
            window.removeEventListener('resize', handleChangeMoviesSettingsWithTimeout);
            // clearTimeout(timeOut);
        }
    });

    return (
        <div className="movies">
            <SearchForm handleGetMoviesArray={handleGetAllMoviesArray} handleChangeIsLoading={handleChangeIsLoading} onDataReceive={handleChangeIsDataRecieved} handleBadTokenLogOut={handleBadTokenLogOut} />
            <HorizontalSeparator />
            {moviesArray && (
                <>
                    <MoviesCardList moviesArray={moviesArray} isLoading={isLoading} isDataRecieved={isDataRecieved} currentMoviesAmount={currentMoviesAmount} handleChangeMovieSavingStatus={handleChangeMovieSavingStatus} savedMoviesArray={savedMoviesArray} />
                    <MoreButton moviesArray={moviesArray} currentMoviesAmount={currentMoviesAmount} onChangeCurrentMoviesAmount={handleChangeCurrentMoviesAmount} isDataRecieved={isDataRecieved} isLoading={isLoading}/>
                </>)}
        </div>
    );
}

export default Movies;
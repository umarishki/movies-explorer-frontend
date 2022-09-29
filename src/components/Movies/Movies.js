import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import HorizontalSeparator from '../HorizontalSeparator/HorizontalSeparator';
import MoreButton from '../MoreButton/MoreButton';
import { getMovies } from '../../utils/MoviesApi';
import poster from '../../images/poster.png';
import './Movies.css';
import { mainApi } from '../../utils/MainApi';
import React, { useEffect, useState } from 'react';

function Movies() {
    const [isDataRecieved, setIsDataRecieved] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentMoviesAmount, setCurrentMoviesAmount] = useState(0);
    const [moviesArray, setMoviesArray] = useState(null);
    const [savedMoviesArray, setSavedMoviesArray] = useState(null);
    const [moviesDisplaySettings, setMoviesDisplaySettings] = useState({ initilalAmount: 0, increment: 0 });

    const moviesArrayTest = [{
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
        isSavedForCurrentUser: true
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
    },
    {
        id: 13,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: false
    },
    {
        id: 14,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: true
    },
    {
        id: 15,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: false
    },
    {
        id: 16,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: true
    },
    {
        id: 17,
        name: '33 слова о дизайне',
        time: '1ч 47м',
        poster: poster,
        isSavedForCurrentUser: false
    }
    ];

    const handleChangeMoviesSettings = () => {
        if (window.innerWidth < 768) {
            setMoviesDisplaySettings({ initilalAmount: 5, increment: 2 });
        } else if (window.innerWidth < 1280) {
            setMoviesDisplaySettings({ initilalAmount: 8, increment: 2 });
        } else {
            setMoviesDisplaySettings({ initilalAmount: 12, increment: 3 });
        }
        console.log("Ширина экрана:: " + window.innerWidth + " | " + "Начальное: " + moviesDisplaySettings.initilalAmount + " | " + "Инкремент: " + moviesDisplaySettings.increment);
    };

    const handleGetMoviesArray = () => {
        return getMovies().then((movies) => {
            setIsLoading(false);
            if (!movies) {
                throw new Error('Ничего не найдено');
            }
            localStorage.setItem('movies', JSON.stringify(movies));
            handleSearchChanges(movies);
            setIsDataRecieved(true);
        })
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
        console.log(currentMoviesAmount);
    }

    const handleChangeIsLoading = (isLoading) => {
        setIsLoading(isLoading);
    };

    const handleChangeIsDataRecieved = (isDataRecieved) => {
        setIsDataRecieved(isDataRecieved);
    };

    const handleSearchChanges = (moviesArrayTest) => {
        setCurrentMoviesAmount(moviesDisplaySettings.initilalAmount);
        setMoviesArray(moviesArrayTest);
    };

    const handleChangeMovieSavingStatus = (movie, isSaved) => {
        if (isSaved) {
            mainApi.deleteSavedMovie(movie.id).then((deletedMovie) => {
                handleGetSavedMovies();
            }).catch((err) => {
                console.log(err);
            });
        } else {
            console.log(movie + "   " + isSaved);
            mainApi.postSavedMovie({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: "https://api.nomoreparties.co/" + movie.image.url,
                trailerLink: movie.trailerLink,
                thumbnail: "https://api.nomoreparties.co/" + movie.image.formats.thumbnail.url,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN
            }).then((savedMovie) => {
                if (!savedMovie) {
                    throw new Error('Сохраненный фильм не найден');
                }
                handleGetSavedMovies();
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    const handleGetSavedMovies = () => {
        mainApi.getSavedMovies().then((savedMovies) => {
            if (!savedMovies) {
                throw new Error('Сохраненные файлы не найдены');
            }
            localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
            setSavedMoviesArray(savedMovies);
        }).catch((err) => {
            console.log(err);
        });
        console.log(savedMoviesArray);
    }

    // useEffect(() => {
    //     handleGetSavedMovies();
    // });

    useEffect(() => {
        handleChangeMoviesSettings();
        handleGetSavedMovies();
    }, [isDataRecieved]);

    useEffect(() => {
        let timeOut;
        const handleChangeMoviesSettingsWithTimeout = () => {
            timeOut = setTimeout(handleChangeMoviesSettings, 1000);
        }
        console.log("Ширина экрана:: " + window.innerWidth + " | " + "Начальное: " + moviesDisplaySettings.initilalAmount + " | " + "Инкремент: " + moviesDisplaySettings.increment);
        window.addEventListener('resize', handleChangeMoviesSettingsWithTimeout);

        return () => {
            window.removeEventListener('resize', handleChangeMoviesSettingsWithTimeout);
            clearTimeout(timeOut);
        }
    });

    return (
        <div className="movies">
            <SearchForm handleGetMoviesArray={handleGetMoviesArray} onLoad={handleChangeIsLoading} onDataReceive={handleChangeIsDataRecieved} />
            <HorizontalSeparator />
            {moviesArray && (
                <>
                    <MoviesCardList moviesArray={moviesArray} isLoading={isLoading} isDataRecieved={isDataRecieved} currentMoviesAmount={currentMoviesAmount} handleChangeMovieSavingStatus={handleChangeMovieSavingStatus} savedMoviesArray={savedMoviesArray} />
                    <MoreButton moviesArray={moviesArray} currentMoviesAmount={currentMoviesAmount} onChangeCurrentMoviesAmount={handleChangeCurrentMoviesAmount} isDataRecieved={isDataRecieved} />
                </>)}
        </div>
    );
}

export default Movies;
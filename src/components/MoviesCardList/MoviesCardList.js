import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList({ moviesArray, isLoading, isDataRecieved, currentMoviesAmount, handleChangeMovieSavingStatus, savedMoviesArray, isMainMoviePage }) {

    if (isLoading) {
        return (
            <Preloader />
        );
    };

    if (moviesArray.length === 0) {
        return (
            <p className="movies__no-movies-text">Ничего не найдено</p>
        )
    }

    if (isDataRecieved) {
        return (
            <>
                <ul className="movies-card-list">
                    {moviesArray.slice(0, currentMoviesAmount).map((movie, i) => {
                        return <MoviesCard key={i} movie={movie} handleChangeMovieSavingStatus={handleChangeMovieSavingStatus} savedMoviesArray={savedMoviesArray} />
                    })
                    }
                </ul>
            </>
        );
    }
}

export default MoviesCardList;
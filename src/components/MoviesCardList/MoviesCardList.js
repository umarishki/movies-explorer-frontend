import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList({ moviesArray, isLoading, isDataRecieved, currentMoviesAmount, handleChangeMovieSavingStatus, savedMoviesArray }) {

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
        console.log(moviesArray);
        return (
            <>
                <ul className="movies-card-list">
                    {moviesArray.slice(0, currentMoviesAmount).map((movie, i) => {
                        return <MoviesCard key={movie.id} movie={movie} handleChangeMovieSavingStatus={handleChangeMovieSavingStatus} savedMoviesArray={savedMoviesArray} />
                    })
                    }
                </ul>
            </>
        );
    }
}

export default MoviesCardList;
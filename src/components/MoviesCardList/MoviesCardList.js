import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import MoreButton from '../MoreButton/MoreButton';
import './MoviesCardList.css';

function MoviesCardList({ moviesArray, isUserPage, isLoading, isDataRecieved }) {
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
                    {moviesArray.map((movie, i) => {
                        return <MoviesCard key={movie.id} title={movie.name} time={movie.time} poster={movie.poster} isSavedMovie={movie.isSavedForCurrentUser} isUserPage={isUserPage} />
                    })
                    }
                </ul>
                <MoreButton moviesArray={moviesArray} />
            </>
        );
    }
}

export default MoviesCardList;
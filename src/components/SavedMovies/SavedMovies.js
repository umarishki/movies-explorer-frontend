import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import HorizontalSeparator from '../HorizontalSeparator/HorizontalSeparator';

function SavedMovies({ savedMoviesArray, savedMoviesAfterFilter, handleGetSavedMovies, handleChangeMovieSavingStatus, handleChangeIsDataRecieved, isDataRecieved, handleChangeIsLoading, isLoading, handleBadTokenLogOut }) {

    return (
        <div className="saved-movies">
            <SearchForm handleGetMoviesArray={handleGetSavedMovies} handleChangeIsLoading={handleChangeIsLoading} onDataReceive={handleChangeIsDataRecieved} handleBadTokenLogOut={handleBadTokenLogOut}/>
            <HorizontalSeparator />
            {savedMoviesArray && (
                <MoviesCardList moviesArray={savedMoviesAfterFilter || savedMoviesArray} isLoading={isLoading} isDataRecieved={isDataRecieved} currentMoviesAmount={savedMoviesAfterFilter ? savedMoviesAfterFilter.length : savedMoviesArray.length} handleChangeMovieSavingStatus={handleChangeMovieSavingStatus} savedMoviesArray={savedMoviesArray} />
            )}
        </div>
    );
}

export default SavedMovies;
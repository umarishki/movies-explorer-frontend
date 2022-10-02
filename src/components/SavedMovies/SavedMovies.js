import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import HorizontalSeparator from '../HorizontalSeparator/HorizontalSeparator';

function SavedMovies({ savedMoviesArray, handleGetSavedMovies, handleChangeMovieSavingStatus, handleChangeIsDataRecieved, isDataRecieved, handleChangeIsLoading, isLoading, handleBadTokenLogOut }) {
    return (
        <div className="saved-movies">
            <SearchForm handleGetMoviesArray={handleGetSavedMovies} handleChangeIsLoading={handleChangeIsLoading} onDataReceive={handleChangeIsDataRecieved} handleBadTokenLogOut={handleBadTokenLogOut}/>
            <HorizontalSeparator />
            {savedMoviesArray && (
                <MoviesCardList moviesArray={savedMoviesArray} isLoading={isLoading} isDataRecieved={isDataRecieved} currentMoviesAmount={savedMoviesArray.length} handleChangeMovieSavingStatus={handleChangeMovieSavingStatus} savedMoviesArray={savedMoviesArray} />
            )}
        </div>
    );
}

export default SavedMovies;
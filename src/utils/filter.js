export const filterMovies = (searchText, isShortMoviesIncluded, moviesArray) => {
    return moviesArray.filter((movie) => {
        const arrayAftertextFilter = movie.nameEN.toLowerCase().includes(searchText.toLowerCase()) || movie.nameRU.toLowerCase().includes(searchText.toLowerCase());

        if (!isShortMoviesIncluded) {
            return arrayAftertextFilter;
        } else {
            return arrayAftertextFilter && (movie.duration <= 40);
        }
    });
}; 
import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import searchButton from '../../images/search-button.svg';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({ handleGetMoviesArray, handleChangeIsLoading, onDataReceive, handleBadTokenLogOut }) {

    const location = useLocation();
    const isUserPage = location.pathname === "/saved-movies";

    const getSerchTextValue = () => {
        if (isUserPage) {
            return { searchSavedMovies: localStorage.getItem('searchSavedMovies') || '', isShortMoviesIncluded: localStorage.getItem('isShortSavedMoviesIncluded') === "true" ? true : false };
        } else {
            return { searchSavedMovies: localStorage.getItem('searchMovies') || '', isShortMoviesIncluded: localStorage.getItem('isShortMoviesIncluded') === "true" ? true : false };
        }
    };

    const [searchFormValue, setsearchFormValue] = useState(getSerchTextValue().searchSavedMovies);
    const [isShortMoviesIncluded, setIsShortMoviesIncluded] = useState(getSerchTextValue().isShortMoviesIncluded);
    const [error, setError] = useState('');

    const handleChangeInput = (e) => {
        setsearchFormValue(e.target.value);
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setError('');
        onDataReceive(false);

        if (searchFormValue === '') {
            return setError('Нужно ввести ключевое слово');
        }

        handleChangeIsLoading(true);

        handleGetMoviesArray(searchFormValue.trim(), isShortMoviesIncluded).catch((err) => {
            handleBadTokenLogOut();
            setError(err.message);
            handleChangeIsLoading(false);
        });
        setTimeout(() => handleChangeIsLoading(false), 1000);
    }

    const handleChangeSwitcher = () => {
        isShortMoviesIncluded ?
            setIsShortMoviesIncluded(false) : setIsShortMoviesIncluded(true);
    }

    return (
        <div className="search-form-container">
            <form className="search-form" onSubmit={handleSearchSubmit}>
                <div className="search-form__input-part">
                    <img className="search-form__search-icon" src={searchIcon} alt="Иконка: поиск" />
                    <input
                        id="search-form-data-input"
                        className="search-form__input"
                        type="text"
                        name="search-data"
                        placeholder="Фильм"
                        value={searchFormValue}
                        onChange={handleChangeInput}
                        autoComplete="off"
                    />
                    <button className="search-form__button" type="submit">
                        <img className="search-form__button-icon" src={searchButton} alt="Кнопка: поиск" />
                    </button>
                </div>
                <div className="search-form__switcher-part">
                    <label className="search-form__checkbox-container">
                        <input
                            className="search-form__checkbox"
                            type="checkbox"
                            name="short-movies-switcher"
                            id="search-form-checkbox-input"
                            onChange={handleChangeSwitcher}
                            checked={isShortMoviesIncluded}
                        />
                        <span className="search-form__slider"></span>
                    </label>
                    <label className="search-form__slider-label" htmlFor="search-form-checkbox-input">Короткометражки</label>
                </div>
            </form>
            <span className="search-form__error search-form__error_visible">{error}</span>
        </div>
    );
}

export default SearchForm;
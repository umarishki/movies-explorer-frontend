import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import searchButton from '../../images/search-button.svg';
import { useState } from 'react';

function SearchForm({ handleGetMoviesArray, onLoad, onDataReceive }) {
    
    const [searchFormValue, setsearchFormValue] = useState('');
    const [isShortMoviesIncluded, setIsShortMoviesIncluded] = useState(false);
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

        onLoad(true);

        localStorage.setItem('searchData', searchFormValue);
        localStorage.setItem('isShortMoviesIncluded', isShortMoviesIncluded);

        handleGetMoviesArray().catch((err) => {
            setError(err.message);
            onLoad(false);
        });
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
                            value={false}
                            onChange={handleChangeSwitcher}
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